n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    a = n(477690),
    o = n(481060),
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
let E = (0, d.Mg)(a.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    b = (0, d.Mg)(a.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
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
    v = i.memo(function (e) {
        let { stickersGrid: t } = e,
            n = l.ZN.useStore((e) => e.inspectedExpressionPosition),
            a = i.useMemo(() => {
                var e;
                let { rowIndex: r, columnIndex: i } = n,
                    a = null == (e = t[r]) ? void 0 : e[i];
                return (null == a ? void 0 : a.type) === _.al.CREATE_STICKER
                    ? {
                          guild_id: a.guild_id,
                          name: a.name
                      }
                    : (null == a ? void 0 : a.type) !== _.al.STICKER
                      ? null
                      : a.sticker;
            }, [t, n]);
        if (null == a) return null;
        let { graphic: s, title: u } = y(a),
            d =
                (0, p.jl)(a) || (0, p.J8)(a)
                    ? (0, r.jsx)(h.Z, {
                          isInteracting: !0,
                          size: E,
                          sticker: a,
                          disableAnimation: !0
                      })
                    : (0, r.jsx)('div', {
                          className: g.iconWrapper,
                          children: (0, r.jsx)(o.qJs, {
                              size: 'md',
                              color: 'currentColor',
                              className: g.icon
                          })
                      });
        return (0, r.jsx)(c.Z, {
            graphicPrimary: d,
            graphicSecondary: s,
            titlePrimary: a.name,
            titleSecondary: (0, p.jl)(a) || (0, p.J8)(a) ? u : null
        });
    });
