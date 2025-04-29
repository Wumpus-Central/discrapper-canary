n.d(t, { Z: () => O });
var r = n(200651),
    i = n(192379),
    o = n(477690),
    a = n(481060),
    s = n(880949),
    l = n(806966),
    c = n(65029),
    u = n(430824),
    d = n(624138),
    f = n(926491),
    _ = n(373228),
    p = n(378233),
    h = n(419922),
    m = n(388032),
    g = n(271536);
let E = (0, d.Mg)(o.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    b = (0, d.Mg)(o.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    y = (e) => {
        let t = null,
            n = null;
        if ((!(0, p.jl)(e) && !(0, p.J8)(e)) || (0, p.J8)(e)) {
            let i = u.Z.getGuild(e.guild_id);
            null != i && ((t = m.intl.format(m.t.cZOkbm, { source: i.name })), (n = (0, r.jsx)(s.Z, { guild: i })));
        } else if ((0, p.jl)(e)) {
            let i = f.Z.getStickerPack(e.pack_id);
            null != i &&
                ((t = m.intl.format(m.t.cZOkbm, { source: i.name })),
                (n = (0, r.jsx)(h.Z, {
                    size: b,
                    sticker: (0, p.Zt)(i),
                    disableAnimation: !0
                })));
        }
        return {
            title: t,
            graphic: n
        };
    },
    O = i.memo(function (e) {
        let { stickersGrid: t } = e,
            n = l.ZN.useStore((e) => e.inspectedExpressionPosition),
            o = i.useMemo(() => {
                var e;
                let { rowIndex: r, columnIndex: i } = n,
                    o = null == (e = t[r]) ? void 0 : e[i];
                return (null == o ? void 0 : o.type) === _.al.CREATE_STICKER
                    ? {
                          guild_id: o.guild_id,
                          name: o.name
                      }
                    : (null == o ? void 0 : o.type) !== _.al.STICKER
                      ? null
                      : o.sticker;
            }, [t, n]);
        if (null == o) return null;
        let { graphic: s, title: u } = y(o),
            d =
                (0, p.jl)(o) || (0, p.J8)(o)
                    ? (0, r.jsx)(h.Z, {
                          isInteracting: !0,
                          size: E,
                          sticker: o,
                          disableAnimation: !0
                      })
                    : (0, r.jsx)('div', {
                          className: g.iconWrapper,
                          children: (0, r.jsx)(a.qJs, {
                              size: 'md',
                              color: 'currentColor',
                              className: g.icon
                          })
                      });
        return (0, r.jsx)(c.Z, {
            graphicPrimary: d,
            graphicSecondary: s,
            titlePrimary: o.name,
            titleSecondary: (0, p.jl)(o) || (0, p.J8)(o) ? u : null
        });
    });
