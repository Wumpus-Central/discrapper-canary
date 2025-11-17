t.d(a, { t: () => v }), t(415506);
var n = t(54381),
    r = t(473749),
    s = t(512722),
    l = t.n(s),
    i = t(478677),
    o = t(755721),
    c = t(481060),
    d = t(570140),
    x = t(275759),
    u = t(202120),
    h = t(600164),
    m = t(710845),
    N = t(424071),
    C = t(388032),
    j = t(771831);
let p = new m.Z("TwoWayLink");
function v(e) {
    let {
            platformType: a,
            isWaitingForConnection: t,
            onWaitingForConnection: s,
            expectedCallbackState: m,
            onAuthToken: v,
            onError: b,
            onClose: f,
            img: k,
            title: g,
            body: E,
            redirectDestination: T,
        } = e,
        O = r.useCallback(async () => {
            let e;
            try {
                if (((e = await (0, u.H)(a, { twoWayLinkType: i.g.DESKTOP })), null == e))
                    throw Error("missing authorizeURL");
            } catch (e) {
                p.error("Error opening provider authorize page", e), b();
                return;
            }
            let { state: t } = (0, x.xp)(e);
            l()(null != t, "Authorize URL state query parameter must be present"), null == s || s(t);
        }, [a, b, s]),
        R = r.useCallback(
            (e) => {
                let { callbackCode: t, callbackState: n } = e;
                if (n !== m) return void p.warn("".concat(a, " link: received mismatching callback state!"));
                v({
                    callbackCode: t,
                    callbackState: n,
                });
            },
            [a, m, v],
        );
    return (
        r.useEffect(
            () => (
                d.Z.subscribe("USER_CONNECTIONS_LINK_CALLBACK", R),
                () => {
                    d.Z.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", R);
                }
            ),
            [R],
        ),
        (0, n.jsxs)(N.Z, {
            children: [
                (0, n.jsxs)(c.xBx, {
                    direction: h.Z.Direction.VERTICAL,
                    className: j.header,
                    separator: !1,
                    children: [
                        (0, n.jsx)(c.Text, {
                            className: j.stepHeader,
                            variant: "text-xs/bold",
                            color: "header-secondary",
                            children: C.intl.format(C.t.fHz6eR, {
                                number: 1,
                                total: 2,
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: j.illustration,
                            children: [k, " "],
                        }),
                        (0, n.jsx)(c.Heading, {
                            className: j.title,
                            variant: "heading-xl/extrabold",
                            children: g,
                        }),
                        null != f &&
                            (0, n.jsx)(c.olH, {
                                className: j.closeButton,
                                onClick: f,
                            }),
                    ],
                }),
                (0, n.jsxs)(c.hzk, {
                    className: j.body,
                    paddingFix: !1,
                    children: [
                        (0, n.jsx)(c.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: E,
                        }),
                        !t &&
                            null != T &&
                            (0, n.jsx)(c.Text, {
                                tag: "p",
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: C.intl.format(C.t.XhlYYn, { redirectUrl: T }),
                            }),
                    ],
                }),
                (0, n.jsx)(c.mzw, {
                    className: j.footer,
                    children: (0, n.jsxs)(o.zx, {
                        className: j.footerButton,
                        color: t ? o.zx.Colors.PRIMARY : o.zx.Colors.BRAND,
                        onClick: O,
                        children: [
                            t ? C.intl.string(C.t["5911Lb"]) : C.intl.string(C.t["3PatSz"]),
                            (0, n.jsx)(c.rgF, {
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
