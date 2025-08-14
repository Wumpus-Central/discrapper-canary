t.d(n, { Z: () => _ });
var i = t(255367);
t(73800);
var a = t(120356),
    s = t.n(a),
    l = t(481060),
    r = t(600164),
    o = t(548647),
    c = t(696375),
    d = t(800530),
    x = t(388032),
    m = t(691196),
    p = t(186425),
    u = t(160557);
function _(e) {
    let { className: n, onNext: t, onClose: a } = e,
        _ = (0, o.n)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.xBx, {
                "data-migration-pending": !0,
                direction: r.Z.Direction.VERTICAL,
                className: p.header,
                separator: !1,
                children: [
                    (0, i.jsx)("div", {
                        className: m.iconContainer,
                        children: (0, i.jsx)("img", {
                            src: u,
                            alt: "",
                            className: m.icon,
                        }),
                    }),
                    (0, i.jsx)(l.X6q, {
                        className: p.title,
                        variant: "heading-xl/semibold",
                        children: x.intl.string(x.t.QMbTSk),
                    }),
                    (0, i.jsx)(l.X6q, {
                        className: p.subtitle,
                        color: "header-secondary",
                        variant: "text-md/normal",
                        children: x.intl.string(x.t.Qdx8AA),
                    }),
                    null != a &&
                        (0, i.jsx)(l.olH, {
                            className: p.closeButton,
                            onClick: a,
                        }),
                ],
            }),
            (0, i.jsxs)(l.hzk, {
                "data-migration-pending": !0,
                className: s()(m.modalContent, n),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(l.X6q, {
                        variant: "heading-md/bold",
                        color: "header-primary",
                        className: m.actionsHeader,
                        children: x.intl.string(x.t["9BRc1N"]),
                    }),
                    (0, i.jsx)(c.Z, {
                        text: x.intl.string(x.t.PxL38P),
                        url: d.sQ.COMMUNITY_GUIDELINES,
                        onClick: () => _(d.n0.ClickCommunityGuidelinesLink),
                    }),
                    (0, i.jsx)(c.Z, {
                        text: x.intl.string(x.t.qC3XKS),
                        url: d.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                        onClick: () => _(d.n0.ClickWarningSystemHelpcenterLink),
                    }),
                ],
            }),
            (0, i.jsx)(l.mzw, {
                "data-migration-pending": !0,
                children: (0, i.jsx)(l.zxk, {
                    variant: "primary",
                    text: x.intl.string(x.t.i4jeWV),
                    onClick: t,
                }),
            }),
        ],
    });
}
