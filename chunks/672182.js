"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    a = n(319060),
    s = n(397927),
    o = n(724511),
    l = n(850992),
    u = n(338464),
    c = n(71393),
    d = n(240248),
    _ = n(679382),
    f = n(842086),
    p = n(378058),
    h = n(148355),
    m = n(985018),
    g = n(905208);
let E = (0, d.xI)(a.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    A = (0, d.xI)(a.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    I = (e) => {
        let t = null,
            n = null;
        if ((!(0, p.FD)(e) && !(0, p.Xw)(e)) || (0, p.Xw)(e)) {
            let i = c.A.getGuild(e.guild_id);
            null != i && ((t = m.intl.format(m.t.cZOkbs, { source: i.name })), (n = (0, r.jsx)(o.A, { guild: i })));
        } else if ((0, p.FD)(e)) {
            let i = _.A.getStickerPack(e.pack_id);
            null != i &&
                ((t = m.intl.format(m.t.cZOkbs, { source: i.name })),
                (n = (0, r.jsx)(h.A, { size: A, sticker: (0, p.Id)(i), disableAnimation: !0 })));
        }
        return { title: t, graphic: n };
    },
    T = i.memo(function (e) {
        let { stickersGrid: t } = e,
            n = l.bM.useStore((e) => e.inspectedExpressionPosition),
            a = i.useMemo(() => {
                let { rowIndex: e, columnIndex: r } = n,
                    i = t[e]?.[r];
                return i?.type === f.op.CREATE_STICKER
                    ? { guild_id: i.guild_id, name: i.name }
                    : i?.type !== f.op.STICKER
                      ? null
                      : i.sticker;
            }, [t, n]);
        if (null == a) return null;
        let { graphic: o, title: c } = I(a),
            d =
                (0, p.FD)(a) || (0, p.Xw)(a)
                    ? (0, r.jsx)(h.A, { isInteracting: !0, size: E, sticker: a, disableAnimation: !0 })
                    : (0, r.jsx)("div", {
                          className: g.P,
                          children: (0, r.jsx)(s.j96, { size: "md", color: "currentColor", className: g.K }),
                      });
        return (0, r.jsx)(u.A, {
            graphicPrimary: d,
            graphicSecondary: o,
            titlePrimary: a.name,
            titleSecondary: (0, p.FD)(a) || (0, p.Xw)(a) ? c : null,
        });
    });
