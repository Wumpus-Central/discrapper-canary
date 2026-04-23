"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    s = n(319060),
    a = n(307301),
    o = n(724511),
    l = n(850992),
    u = n(338464),
    c = n(71393),
    d = n(240248),
    _ = n(679382),
    f = n(842086),
    p = n(378058),
    h = n(148355),
    E = n(985018),
    m = n(867981);
let g = (0, d.xI)(s.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    A = (0, d.xI)(s.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    I = i.memo(function (e) {
        let { stickersGrid: t } = e,
            n = l.bM.useStore((e) => e.inspectedExpressionPosition),
            s = i.useMemo(() => {
                let { rowIndex: e, columnIndex: r } = n,
                    i = t[e]?.[r];
                return i?.type === f.op.CREATE_STICKER
                    ? { guild_id: i.guild_id, name: i.name }
                    : i?.type !== f.op.STICKER
                      ? null
                      : i.sticker;
            }, [t, n]);
        if (null == s) return null;
        let { graphic: d, title: I } = ((e) => {
                let t = null,
                    n = null;
                if ((!(0, p.FD)(e) && !(0, p.Xw)(e)) || (0, p.Xw)(e)) {
                    let i = c.A.getGuild(e.guild_id);
                    null != i &&
                        ((t = E.intl.format(E.t.cZOkbs, { source: i.name })), (n = (0, r.jsx)(o.A, { guild: i })));
                } else if ((0, p.FD)(e)) {
                    let i = _.A.getStickerPack(e.pack_id);
                    null != i &&
                        ((t = E.intl.format(E.t.cZOkbs, { source: i.name })),
                        (n = (0, r.jsx)(h.A, { size: A, sticker: (0, p.Id)(i), disableAnimation: !0 })));
                }
                return { title: t, graphic: n };
            })(s),
            T =
                (0, p.FD)(s) || (0, p.Xw)(s)
                    ? (0, r.jsx)(h.A, { isInteracting: !0, size: g, sticker: s, disableAnimation: !0 })
                    : (0, r.jsx)("div", {
                          className: m.P,
                          children: (0, r.jsx)(a.j, { size: "md", color: "currentColor", className: m.K }),
                      });
        return (0, r.jsx)(u.A, {
            graphicPrimary: T,
            graphicSecondary: d,
            titlePrimary: s.name,
            titleSecondary: (0, p.FD)(s) || (0, p.Xw)(s) ? I : null,
        });
    });
