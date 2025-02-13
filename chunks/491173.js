n.d(t, { Z: () => I });
var i = n(200651),
    r = n(192379),
    a = n(477690),
    s = n(481060),
    o = n(880949),
    l = n(806966),
    u = n(65029),
    c = n(430824),
    d = n(624138),
    f = n(926491),
    _ = n(373228),
    p = n(378233),
    h = n(419922),
    m = n(388032),
    g = n(39257);
let E = (0, d.Mg)(a.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    v = (0, d.Mg)(a.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    y = (e) => {
        let t = null,
            n = null;
        if ((!(0, p.jl)(e) && !(0, p.J8)(e)) || (0, p.J8)(e)) {
            let r = c.Z.getGuild(e.guild_id);
            null != r && ((t = m.intl.format(m.t.cZOkbm, { source: r.name })), (n = (0, i.jsx)(o.Z, { guild: r })));
        } else if ((0, p.jl)(e)) {
            let r = f.Z.getStickerPack(e.pack_id);
            null != r &&
                ((t = m.intl.format(m.t.cZOkbm, { source: r.name })),
                (n = (0, i.jsx)(h.ZP, {
                    size: v,
                    sticker: (0, p.Zt)(r),
                    disableAnimation: !0
                })));
        }
        return {
            title: t,
            graphic: n
        };
    },
    I = r.memo(function (e) {
        let { stickersGrid: t } = e,
            n = l.ZN.useStore((e) => e.inspectedExpressionPosition),
            a = r.useMemo(() => {
                var e;
                let { rowIndex: i, columnIndex: r } = n,
                    a = null === (e = t[i]) || void 0 === e ? void 0 : e[r];
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
        let { graphic: o, title: c } = y(a),
            d =
                (0, p.jl)(a) || (0, p.J8)(a)
                    ? (0, i.jsx)(h.ZP, {
                          isInteracting: !0,
                          size: E,
                          sticker: a,
                          disableAnimation: !0
                      })
                    : (0, i.jsx)('div', {
                          className: g.iconWrapper,
                          children: (0, i.jsx)(s.qJs, {
                              size: 'md',
                              color: 'currentColor',
                              className: g.icon
                          })
                      });
        return (0, i.jsx)(u.Z, {
            graphicPrimary: d,
            graphicSecondary: o,
            titlePrimary: a.name,
            titleSecondary: (0, p.jl)(a) || (0, p.J8)(a) ? c : null
        });
    });
