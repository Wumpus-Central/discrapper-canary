var i = r(200651),
    a = r(192379),
    o = r(477690),
    s = r(481060),
    l = r(880949),
    u = r(806966),
    c = r(65029),
    d = r(430824),
    f = r(624138),
    p = r(926491),
    h = r(373228),
    _ = r(378233),
    m = r(419922),
    g = r(388032),
    E = r(797479);
let v = (0, f.Mg)(o.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    y = (0, f.Mg)(o.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    b = (e) => {
        let n = null,
            r = null;
        if ((!(0, _.jl)(e) && !(0, _.J8)(e)) || (0, _.J8)(e)) {
            let a = d.Z.getGuild(e.guild_id);
            null != a && ((n = g.intl.format(g.t.cZOkbm, { source: a.name })), (r = (0, i.jsx)(l.Z, { guild: a })));
        } else if ((0, _.jl)(e)) {
            let a = p.Z.getStickerPack(e.pack_id);
            null != a &&
                ((n = g.intl.format(g.t.cZOkbm, { source: a.name })),
                (r = (0, i.jsx)(m.ZP, {
                    size: y,
                    sticker: (0, _.Zt)(a),
                    disableAnimation: !0
                })));
        }
        return {
            title: n,
            graphic: r
        };
    },
    I = a.memo(function (e) {
        let { stickersGrid: n } = e,
            r = u.ZN.useStore((e) => e.inspectedExpressionPosition),
            o = a.useMemo(() => {
                var e;
                let { rowIndex: i, columnIndex: a } = r,
                    o = null === (e = n[i]) || void 0 === e ? void 0 : e[a];
                return (null == o ? void 0 : o.type) === h.al.CREATE_STICKER
                    ? {
                          guild_id: o.guild_id,
                          name: o.name
                      }
                    : (null == o ? void 0 : o.type) !== h.al.STICKER
                      ? null
                      : o.sticker;
            }, [n, r]);
        if (null == o) return null;
        let { graphic: l, title: d } = b(o),
            f =
                (0, _.jl)(o) || (0, _.J8)(o)
                    ? (0, i.jsx)(m.ZP, {
                          isInteracting: !0,
                          size: v,
                          sticker: o,
                          disableAnimation: !0
                      })
                    : (0, i.jsx)('div', {
                          className: E.iconWrapper,
                          children: (0, i.jsx)(s.PlusSmallIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: E.icon
                          })
                      });
        return (0, i.jsx)(c.Z, {
            graphicPrimary: f,
            graphicSecondary: l,
            titlePrimary: o.name,
            titleSecondary: (0, _.jl)(o) || (0, _.J8)(o) ? d : null
        });
    });
n.Z = I;
