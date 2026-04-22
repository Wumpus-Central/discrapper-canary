"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(319060),
    r = n(307301),
    a = n(724511),
    o = n(850992),
    c = n(338464),
    u = n(71393),
    d = n(240248),
    h = n(679382),
    m = n(842086),
    p = n(378058),
    f = n(148355),
    g = n(985018),
    _ = n(867981);
let x = (0, d.xI)(s.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    A = (0, d.xI)(s.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    C = l.memo(function (e) {
        let { stickersGrid: t } = e,
            n = o.bM.useStore((e) => e.inspectedExpressionPosition),
            s = l.useMemo(() => {
                let { rowIndex: e, columnIndex: i } = n,
                    l = t[e]?.[i];
                return l?.type === m.op.CREATE_STICKER
                    ? { guild_id: l.guild_id, name: l.name }
                    : l?.type !== m.op.STICKER
                      ? null
                      : l.sticker;
            }, [t, n]);
        if (null == s) return null;
        let { graphic: d, title: C } = ((e) => {
                let t = null,
                    n = null;
                if ((!(0, p.FD)(e) && !(0, p.Xw)(e)) || (0, p.Xw)(e)) {
                    let l = u.A.getGuild(e.guild_id);
                    null != l &&
                        ((t = g.intl.format(g.t.cZOkbs, { source: l.name })), (n = (0, i.jsx)(a.A, { guild: l })));
                } else if ((0, p.FD)(e)) {
                    let l = h.A.getStickerPack(e.pack_id);
                    null != l &&
                        ((t = g.intl.format(g.t.cZOkbs, { source: l.name })),
                        (n = (0, i.jsx)(f.A, { size: A, sticker: (0, p.Id)(l), disableAnimation: !0 })));
                }
                return { title: t, graphic: n };
            })(s),
            E =
                (0, p.FD)(s) || (0, p.Xw)(s)
                    ? (0, i.jsx)(f.A, { isInteracting: !0, size: x, sticker: s, disableAnimation: !0 })
                    : (0, i.jsx)("div", {
                          className: _.P,
                          children: (0, i.jsx)(r.j, { size: "md", color: "currentColor", className: _.K }),
                      });
        return (0, i.jsx)(c.A, {
            graphicPrimary: E,
            graphicSecondary: d,
            titlePrimary: s.name,
            titleSecondary: (0, p.FD)(s) || (0, p.Xw)(s) ? C : null,
        });
    });
