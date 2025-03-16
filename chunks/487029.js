n.d(t, { Z: () => x }), n(47120), n(230036), n(653041);
var r = n(200651),
    l = n(192379),
    o = n(990547),
    i = n(442837),
    a = n(100527),
    s = n(906732),
    c = n(213609),
    u = n(675478),
    d = n(19780),
    h = n(709054),
    f = n(208049),
    p = n(763296),
    g = n(242291),
    y = n(174470),
    v = n(549771),
    O = n(964398),
    b = n(409673),
    N = n(710111),
    m = n(619129);
function x(e) {
    let { guildId: t, channel: n, width: x, height: C, keepOpen: E, interactive: j = !0, analyticsSource: P, onClose: I } = e,
        S = (function (e) {
            let [t, n] = (0, i.Wu)([p.Z], () => [p.Z.getSounds(), p.Z.getFavorites()]);
            return l.useMemo(() => {
                let r = [],
                    l = [...e, N.X8],
                    o = (e, l) => {
                        var o, i;
                        for (let a of null !== (i = null === (o = t.get(e)) || void 0 === o ? void 0 : o.sort((e, t) => h.default.compare(e.soundId, t.soundId))) && void 0 !== i ? i : []) {
                            let e = n.has(a.soundId);
                            ((e && l) || (!e && !l)) && a.available && r.push(a);
                        }
                    };
                return l.forEach((e) => o(e, !0)), l.forEach((e) => o(e, !1)), r;
            }, [t, n, e]);
        })((0, v.h)(n, !0)),
        w = (0, y.j)(),
        T = l.useRef(null),
        [Z, _] = l.useState(void 0),
        R = (0, i.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: A } = (0, s.ZP)(a.Z.SOUNDBOARD_WHEEL),
        D = l.useCallback(
            (e) => {
                (0, g.GN)(e, n.id, A), I();
            },
            [A, n.id, I]
        );
    l.useEffect(() => {
        f.w(), u.DZ.loadIfNecessary();
    }, []),
        l.useEffect(() => {
            0 === S.length && 0 === w.length && I();
        }, [S.length, w, I]),
        l.useEffect(
            () => () => {
                let e = T.current;
                E || null == e || D(e);
            },
            [E, D]
        ),
        (0, c.Z)(
            {
                type: o.ImpressionTypes.POPOUT,
                name: o.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: P,
                    guild_id: t,
                    media_session_id: R
                }
            },
            { disableTrack: !j }
        );
    let W = l.useCallback((e) => {
            (T.current = e), _(null == e ? void 0 : e.soundId);
        }, []),
        k = l.useCallback(
            (e) => {
                if (null == e) {
                    W(null);
                    return;
                }
                let t = S[e];
                null != t && W(t);
            },
            [W, S]
        ),
        M = l.useCallback(
            (e) => {
                if (null == e) return;
                let t = S[e];
                null != t && D(t);
            },
            [S, D]
        ),
        B = l.useMemo(
            () =>
                S.map((e) =>
                    (0, r.jsx)(
                        b.ZP,
                        {
                            interactive: j,
                            className: m.soundButton,
                            sound: e,
                            focused: Z === e.soundId,
                            channel: n
                        },
                        e.soundId
                    )
                ),
            [Z, n, j, S]
        );
    return 0 === S.length
        ? null
        : (0, r.jsx)(s.Gt, {
              value: A,
              children: (0, r.jsx)(O.Z, {
                  wheelWidth: x,
                  wheelHeight: C,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !E,
                  activeItem: Z,
                  onItemSelect: k,
                  onItemAction: M,
                  onClose: I,
                  interactive: j,
                  children: B
              })
          });
}
