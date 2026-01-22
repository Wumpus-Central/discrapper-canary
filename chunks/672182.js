n.d(t, { A: () => O });
var r = n(627968),
    i = n(64700),
    a = n(319060),
    s = n(397927),
    o = n(724511),
    l = n(850992),
    c = n(338464),
    u = n(71393),
    d = n(240248),
    f = n(679382),
    p = n(842086),
    _ = n(378058),
    h = n(148355),
    m = n(985018),
    g = n(905208);
let E = (0, d.xI)(a.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    b = (0, d.xI)(a.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    y = (e) => {
        let t = null,
            n = null;
        if ((!(0, _.FD)(e) && !(0, _.Xw)(e)) || (0, _.Xw)(e)) {
            let i = u.A.getGuild(e.guild_id);
            null != i && ((t = m.intl.format(m.t.cZOkbs, { source: i.name })), (n = (0, r.jsx)(o.A, { guild: i })));
        } else if ((0, _.FD)(e)) {
            let i = f.A.getStickerPack(e.pack_id);
            null != i &&
                ((t = m.intl.format(m.t.cZOkbs, { source: i.name })),
                (n = (0, r.jsx)(h.A, {
                    size: b,
                    sticker: (0, _.Id)(i),
                    disableAnimation: !0,
                })));
        }
        return {
            title: t,
            graphic: n,
        };
    },
    O = i.memo(function (e) {
        let { stickersGrid: t } = e,
            n = l.bM.useStore((e) => e.inspectedExpressionPosition),
            a = i.useMemo(() => {
                var e;
                let { rowIndex: r, columnIndex: i } = n,
                    a = null == (e = t[r]) ? void 0 : e[i];
                return (null == a ? void 0 : a.type) === p.op.CREATE_STICKER
                    ? {
                          guild_id: a.guild_id,
                          name: a.name,
                      }
                    : (null == a ? void 0 : a.type) !== p.op.STICKER
                      ? null
                      : a.sticker;
            }, [t, n]);
        if (null == a) return null;
        let { graphic: o, title: u } = y(a),
            d =
                (0, _.FD)(a) || (0, _.Xw)(a)
                    ? (0, r.jsx)(h.A, {
                          isInteracting: !0,
                          size: E,
                          sticker: a,
                          disableAnimation: !0,
                      })
                    : (0, r.jsx)("div", {
                          className: g.P,
                          children: (0, r.jsx)(s.j96, {
                              size: "md",
                              color: "currentColor",
                              className: g.K,
                          }),
                      });
        return (0, r.jsx)(c.A, {
            graphicPrimary: d,
            graphicSecondary: o,
            titlePrimary: a.name,
            titleSecondary: (0, _.FD)(a) || (0, _.Xw)(a) ? u : null,
        });
    });
