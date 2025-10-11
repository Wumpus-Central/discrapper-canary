t.d(a, { t: () => v }), t(415506);
var r = t(951288),
    n = t(647438),
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
            onError: f,
            onClose: k,
            img: b,
            title: g,
            body: E,
            redirectDestination: T,
        } = e,
        O = n.useCallback(async () => {
            let e;
            try {
                if (((e = await (0, u.H)(a, { twoWayLinkType: i.g.DESKTOP })), null == e))
                    throw Error("missing authorizeURL");
            } catch (e) {
                p.error("Error opening provider authorize page", e), f();
                return;
            }
            let { state: t } = (0, x.xp)(e);
            l()(null != t, "Authorize URL state query parameter must be present"), null == s || s(t);
        }, [a, f, s]),
        y = n.useCallback(
            (e) => {
                let { callbackCode: t, callbackState: r } = e;
                if (r !== m) return void p.warn("".concat(a, " link: received mismatching callback state!"));
                v({
                    callbackCode: t,
                    callbackState: r,
                });
            },
            [a, m, v],
        );
    return (
        n.useEffect(
            () => (
                d.Z.subscribe("USER_CONNECTIONS_LINK_CALLBACK", y),
                () => {
                    d.Z.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", y);
                }
            ),
            [y],
        ),
        (0, r.jsxs)(N.Z, {
            children: [
                (0, r.jsxs)(c.xBx, {
                    direction: h.Z.Direction.VERTICAL,
                    className: j.header,
                    separator: !1,
                    children: [
                        (0, r.jsx)(c.Text, {
                            className: j.stepHeader,
                            variant: "text-xs/bold",
                            color: "header-secondary",
                            children: C.intl.format(C.t.fHz6eX, {
                                number: 1,
                                total: 2,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: j.illustration,
                            children: [b, " "],
                        }),
                        (0, r.jsx)(c.Heading, {
                            className: j.title,
                            variant: "heading-xl/extrabold",
                            children: g,
                        }),
                        null != k &&
                            (0, r.jsx)(c.olH, {
                                className: j.closeButton,
                                onClick: k,
                            }),
                    ],
                }),
                (0, r.jsxs)(c.hzk, {
                    className: j.body,
                    paddingFix: !1,
                    children: [
                        (0, r.jsx)(c.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: E,
                        }),
                        !t &&
                            null != T &&
                            (0, r.jsx)(c.Text, {
                                tag: "p",
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: C.intl.format(C.t.XhlYYm, { redirectUrl: T }),
                            }),
                    ],
                }),
                (0, r.jsx)(c.mzw, {
                    className: j.footer,
                    children: (0, r.jsxs)(o.zx, {
                        className: j.footerButton,
                        color: t ? o.zx.Colors.PRIMARY : o.zx.Colors.BRAND,
                        onClick: O,
                        children: [
                            t ? C.intl.string(C.t["5911LS"]) : C.intl.string(C.t["3PatS0"]),
                            (0, r.jsx)(c.rgF, {
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
