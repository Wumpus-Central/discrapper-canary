t.d(n, { default: () => h }), t(953529);
var a = t(255367),
    o = t(73800),
    s = t(286379),
    i = t(399606),
    c = t(755721),
    l = t(481060),
    r = t(797614),
    d = t(819557),
    u = t(138201),
    _ = t(359119),
    m = t(473092),
    x = t(636749),
    b = t(981631),
    v = t(388032),
    g = t(549306);
function h(e) {
    let {
            transitionState: n,
            onClose: t,
            channelId: h,
            warningId: N,
            senderId: k,
            description: T,
            safetyTipRows: f,
            actionRows: j,
            learnMore: p,
        } = e,
        B = (0, i.e7)([_.ZP], () => _.ZP.getChannelSafetyWarning(h, N));
    return (
        o.useEffect(() => {
            (0, m.MC)(b.rMx.SAFETY_WARNING_MODAL_VIEWED, {
                channelId: h,
                warningId: N,
                senderId: k,
                warningType: null == B ? void 0 : B.type,
            }),
                r.Z.increment({ name: s.V.SAFETY_WARNING_MODAL_VIEW });
        }, [h, N, k, B]),
        (0, a.jsx)(l.Y0X, {
            transitionState: n,
            parentComponent: "MoreTipsModal",
            children: (0, a.jsxs)(l.Ttm, {
                style: { overflow: "hidden auto" },
                children: [
                    (0, a.jsxs)(l.xBx, {
                        className: g.modalHeader,
                        children: [
                            (0, a.jsxs)("div", {
                                className: g.modalHeaderText,
                                children: [
                                    (0, a.jsx)(l.Text, {
                                        variant: "eyebrow",
                                        color: "status-positive-text",
                                        children: v.intl.string(v.t.lyt43N),
                                    }),
                                    (0, a.jsx)(l.X6q, {
                                        variant: "heading-xl/bold",
                                        color: "status-positive-text",
                                        children: T,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(c.zx, {
                                "aria-label": v.intl.string(v.t.cpT0Cg),
                                look: c.zx.Looks.BLANK,
                                size: c.zx.Sizes.NONE,
                                onClick: t,
                                innerClassName: g.closeButtonInner,
                                className: g.closeButton,
                                children: (0, a.jsx)(l.Dio, {
                                    size: "sm",
                                    color: "currentColor",
                                    className: g.closeIcon,
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsxs)(l.hzk, {
                        className: g.modalContent,
                        children: [
                            (0, a.jsxs)("div", {
                                className: g.mainSection,
                                children: [(0, a.jsx)(d.z, { children: f }), null != p ? p : null],
                            }),
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(l.Text, {
                                        className: g.moreHeading,
                                        variant: "eyebrow",
                                        color: "header-secondary",
                                        children: v.intl.string(v.t.K5FKtb),
                                    }),
                                    (0, a.jsx)(u.rT, { children: j }),
                                ],
                            }),
                            (0, a.jsx)(x.Z, {
                                channelId: h,
                                warningId: N,
                                senderId: k,
                                safetyWarning: B,
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
