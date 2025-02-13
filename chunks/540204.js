n.d(t, { Z: () => _ }), n(733860);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    a = n(565138),
    o = n(430824),
    c = n(771845),
    d = n(823379),
    u = n(997950),
    h = n(816108),
    m = n(388032),
    g = n(797653);
let x = {
    label: () => m.intl.string(m.t['32u1Dw']),
    value: u.Th
};
function _() {
    let { selectedGuildId: e, setSelectedGuildId: t } = (0, u.xu)(),
        n = (0, l.e7)([c.ZP], () => c.ZP.getFlattenedGuildIds()),
        m = (0, l.e7)([o.Z], () => o.Z.getGuilds()),
        { hideGuildOptions: _, hideGlobalOption: p } = (0, h.b)(),
        E = n[0];
    s.useEffect(() => {
        (!p || !_) && (e === u.Th && e !== E && p && t(E), e !== u.Th && _ && t(u.Th));
    }, [e, t, p, _, E]);
    let C = s.useMemo(() => {
            let e = _
                ? []
                : n
                      .map((e) => {
                          let t = m[e];
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
                        ...x,
                        label: x.label()
                    }),
                e
            );
        }, [_, n, p, m]),
        N = s.useCallback(
            (e) => {
                let t = (null == e ? void 0 : e.label) === x.label() && (null == e ? void 0 : e.value) === x.value;
                return null == e || '' === e.value || t
                    ? (0, i.jsx)('div', {
                          className: g.clydeIconContainer,
                          children: (0, i.jsx)(r.gw7, {
                              size: 'sm',
                              color: 'white',
                              'aria-hidden': !0,
                              className: g.guildSelectOptionIcon
                          })
                      })
                    : (0, i.jsx)(a.Z, {
                          className: g.guildSelectOptionIcon,
                          guild: m[e.value],
                          size: a.Z.Sizes.SMALLER,
                          active: !0
                      });
            },
            [m]
        );
    return (0, i.jsx)(r.VcW, {
        wrapperClassName: g.searchableSelect,
        onChange: (e) => {
            t(e);
        },
        value: e,
        options: C,
        renderOptionPrefix: N
    });
}
