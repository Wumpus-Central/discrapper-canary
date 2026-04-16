"use strict";
n.d(t, { o: () => c });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(397927),
    a = n(415951),
    o = n(985018),
    d = n(48620);
function c(e) {
    let { guildId: t } = e,
        n = s.useCallback(() => {
            a.A.openMemberVerificationPreviewModal(t);
        }, [t]);
    return (0, i.jsxs)(r.DUT, {
        onClick: n,
        className: d.j,
        children: [
            (0, i.jsx)(l.EYj, {
                tag: "span",
                variant: "text-sm/semibold",
                color: "text-brand",
                children: o.intl.string(o.t.SKNnqq),
            }),
            (0, i.jsx)(r.tfB, { size: "xs", color: "currentColor" }),
        ],
    });
}
