a.d(t, { t: () => v }), a(415506);
var l = a(54381),
    n = a(473749),
    s = a(512722),
    r = a.n(s),
    i = a(478677),
    o = a(755721),
    c = a(481060),
    d = a(570140),
    u = a(275759),
    x = a(202120),
    m = a(600164),
    h = a(710845),
    N = a(424071),
    C = a(388032),
    j = a(771831);
let p = new h.Z("TwoWayLink");
function v(e) {
    let {
            platformType: t,
            isWaitingForConnection: a,
            onWaitingForConnection: s,
            expectedCallbackState: h,
            onAuthToken: v,
            onError: f,
            onClose: b,
            img: k,
            title: g,
            body: E,
            redirectDestination: T,
        } = e,
        O = n.useCallback(async () => {
            let e;
            try {
                if (((e = await (0, x.H)(t, { twoWayLinkType: i.g.DESKTOP })), null == e))
                    throw Error("missing authorizeURL");
            } catch (e) {
                p.error("Error opening provider authorize page", e), f();
                return;
            }
            let { state: a } = (0, u.xp)(e);
            r()(null != a, "Authorize URL state query parameter must be present"), null == s || s(a);
        }, [t, f, s]),
        R = n.useCallback(
            (e) => {
                let { callbackCode: a, callbackState: l } = e;
                if (l !== h) return void p.warn("".concat(t, " link: received mismatching callback state!"));
                v({
                    callbackCode: a,
                    callbackState: l,
                });
            },
            [t, h, v],
        );
    return (
        n.useEffect(
            () => (
                d.Z.subscribe("USER_CONNECTIONS_LINK_CALLBACK", R),
                () => {
                    d.Z.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", R);
                }
            ),
            [R],
        ),
        (0, l.jsxs)(N.Z, {
            children: [
                (0, l.jsxs)(c.xBx, {
                    direction: m.Z.Direction.VERTICAL,
                    className: j.header,
                    separator: !1,
                    children: [
                        (0, l.jsx)(c.Text, {
                            className: j.stepHeader,
                            variant: "text-xs/bold",
                            color: "text-default",
                            children: C.intl.format(C.t.fHz6eR, {
                                number: 1,
                                total: 2,
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: j.illustration,
                            children: [k, " "],
                        }),
                        (0, l.jsx)(c.Heading, {
                            className: j.title,
                            variant: "heading-xl/extrabold",
                            children: g,
                        }),
                        null != b &&
                            (0, l.jsx)(c.olH, {
                                className: j.closeButton,
                                onClick: b,
                            }),
                    ],
                }),
                (0, l.jsxs)(c.hzk, {
                    className: j.body,
                    paddingFix: !1,
                    children: [
                        (0, l.jsx)(c.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "text-default",
                            children: E,
                        }),
                        !a &&
                            null != T &&
                            (0, l.jsx)(c.Text, {
                                tag: "p",
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: C.intl.format(C.t.XhlYYn, { redirectUrl: T }),
                            }),
                    ],
                }),
                (0, l.jsx)(c.mzw, {
                    className: j.footer,
                    children: (0, l.jsxs)(o.zx, {
                        className: j.footerButton,
                        color: a ? o.zx.Colors.PRIMARY : o.zx.Colors.BRAND,
                        onClick: O,
                        children: [
                            a ? C.intl.string(C.t["5911Lb"]) : C.intl.string(C.t["3PatSz"]),
                            (0, l.jsx)(c.rgF, {
                                color: "currentColor",
                                className: j.launchIcon,
                                size: "xs",
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
