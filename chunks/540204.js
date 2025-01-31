n.d(t, { Z: () => x }), n(733860);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(565138),
    o = n(430824),
    c = n(771845),
    d = n(823379),
    u = n(997950),
    m = n(816108),
    h = n(388032),
    g = n(266759);
let _ = {
    label: () => h.intl.string(h.t['32u1Dw']),
    value: u.Th
};
function x() {
    let { selectedGuildId: e, setSelectedGuildId: t } = (0, u.xu)(),
        n = (0, r.e7)([c.ZP], () => c.ZP.getFlattenedGuildIds()),
        h = (0, r.e7)([o.Z], () => o.Z.getGuilds()),
        { hideGuildOptions: x, hideGlobalOption: p } = (0, m.b)(),
        E = n[0];
    s.useEffect(() => {
        (!p || !x) && (e === u.Th && e !== E && p && t(E), e !== u.Th && x && t(u.Th));
    }, [e, t, p, x, E]);
    let C = s.useMemo(() => {
            let e = x
                ? []
                : n
                      .map((e) => {
                          let t = h[e];
                          return null == t
                              ? null
                              : {
                                    label: t.name,
                                    value: t.id
                                };
                      })
                      .filter(d.lm);
            return (
                p ||
                    e.unshift({
                        ..._,
                        label: _.label()
                    }),
                e
            );
        }, [x, n, p, h]),
        f = s.useCallback(
            (e) => {
                let t = (null == e ? void 0 : e.label) === _.label() && (null == e ? void 0 : e.value) === _.value;
                return null == e || '' === e.value || t
                    ? (0, i.jsx)('div', {
                          className: g.clydeIconContainer,
                          children: (0, i.jsx)(l.gw7, {
                              size: 'sm',
                              color: 'white',
                              'aria-hidden': !0,
                              className: g.guildSelectOptionIcon
                          })
                      })
                    : (0, i.jsx)(a.Z, {
                          className: g.guildSelectOptionIcon,
                          guild: h[e.value],
                          size: a.Z.Sizes.SMALLER,
                          active: !0
                      });
            },
            [h]
        );
    return (0, i.jsx)(l.VcW, {
        wrapperClassName: g.searchableSelect,
        onChange: (e) => {
            t(e);
        },
        value: e,
        options: C,
        renderOptionPrefix: f
    });
}
