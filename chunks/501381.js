n.d(t, { o: () => u });
var i = n(627968),
    l = n(64700),
    s = n(834730),
    r = n(939249),
    a = n(811893),
    o = n(415951),
    d = n(985018),
    c = n(202604);
function u(e) {
    let { guildId: t } = e,
        n = l.useCallback(() => {
            o.A.openMemberVerificationPreviewModal(t);
        }, [t]);
    return (0, i.jsxs)(r.D, {
        onClick: n,
        className: c.j,
        children: [
            (0, i.jsx)(s.E, {
                tag: "span",
                variant: "text-sm/semibold",
                color: "text-brand",
                children: d.intl.string(d.t.SKNnqq),
            }),
            (0, i.jsx)(a.t, { size: "xs", color: "currentColor" }),
        ],
    });
}
