var i = r(200651),
    a = r(192379),
    s = r(477690),
    o = r(481060),
    l = r(880949),
    u = r(806966),
    c = r(65029),
    d = r(430824),
    f = r(624138),
    _ = r(926491),
    h = r(373228),
    p = r(378233),
    m = r(419922),
    g = r(388032),
    E = r(797479);
let v = (0, f.Mg)(s.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    I = (0, f.Mg)(s.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    T = (e) => {
        let n = null,
            r = null;
        if ((!(0, p.jl)(e) && !(0, p.J8)(e)) || (0, p.J8)(e)) {
            let a = d.Z.getGuild(e.guild_id);
            null != a && ((n = g.intl.format(g.t.cZOkbm, { source: a.name })), (r = (0, i.jsx)(l.Z, { guild: a })));
        } else if ((0, p.jl)(e)) {
            let a = _.Z.getStickerPack(e.pack_id);
            null != a &&
                ((n = g.intl.format(g.t.cZOkbm, { source: a.name })),
                (r = (0, i.jsx)(m.ZP, {
                    size: I,
                    sticker: (0, p.Zt)(a),
                    disableAnimation: !0
                })));
        }
        return {
            title: n,
            graphic: r
        };
    },
    b = a.memo(function (e) {
        let { stickersGrid: n } = e,
            r = u.ZN.useStore((e) => e.inspectedExpressionPosition),
            s = a.useMemo(() => {
                var e;
                let { rowIndex: i, columnIndex: a } = r,
                    s = null === (e = n[i]) || void 0 === e ? void 0 : e[a];
                return (null == s ? void 0 : s.type) === h.al.CREATE_STICKER
                    ? {
                          guild_id: s.guild_id,
                          name: s.name
                      }
                    : (null == s ? void 0 : s.type) !== h.al.STICKER
                      ? null
                      : s.sticker;
            }, [n, r]);
        if (null == s) return null;
        let { graphic: l, title: d } = T(s),
            f =
                (0, p.jl)(s) || (0, p.J8)(s)
                    ? (0, i.jsx)(m.ZP, {
                          isInteracting: !0,
                          size: v,
                          sticker: s,
                          disableAnimation: !0
                      })
                    : (0, i.jsx)('div', {
                          className: E.iconWrapper,
                          children: (0, i.jsx)(o.PlusSmallIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: E.icon
                          })
                      });
        return (0, i.jsx)(c.Z, {
            graphicPrimary: f,
            graphicSecondary: l,
            titlePrimary: s.name,
            titleSecondary: (0, p.jl)(s) || (0, p.J8)(s) ? d : null
        });
    });
n.Z = b;
