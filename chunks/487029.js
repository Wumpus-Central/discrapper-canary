(n.d(t, { Z: () => x }), n(388685), n(642613), n(539854));
var r = n(255367),
    l = n(73800),
    i = n(990547),
    o = n(442837),
    a = n(100527),
    s = n(906732),
    c = n(213609),
    u = n(675478),
    d = n(19780),
    f = n(709054),
    h = n(208049),
    p = n(763296),
    g = n(242291),
    y = n(174470),
    O = n(549771),
    b = n(964398),
    v = n(294206),
    m = n(710111),
    N = n(840558);
function x(e) {
    let { guildId: t, channel: n, width: x, height: E, keepOpen: C, interactive: I = !0, analyticsSource: T, onClose: j } = e,
        S = (function (e) {
            let [t, n] = (0, o.Wu)([p.Z], () => [p.Z.getSounds(), p.Z.getFavorites()]);
            return l.useMemo(() => {
                let r = [],
                    l = [...e, m.X8],
                    i = (e, l) => {
                        var i, o;
                        for (let a of null != (o = null == (i = t.get(e)) ? void 0 : i.sort((e, t) => f.default.compare(e.soundId, t.soundId))) ? o : []) {
                            let e = n.has(a.soundId);
                            ((e && l) || (!e && !l)) && a.available && r.push(a);
                        }
                    };
                return (l.forEach((e) => i(e, !0)), l.forEach((e) => i(e, !1)), r);
            }, [t, n, e]);
        })((0, O.h)(n, !0)),
        P = (0, y.j)(),
        _ = l.useRef(null),
        [Z, A] = l.useState(void 0),
        w = (0, o.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: R } = (0, s.ZP)(a.Z.SOUNDBOARD_WHEEL),
        D = l.useCallback(
            (e) => {
                ((0, g.GN)(e, n.id, R), j());
            },
            [R, n.id, j]
        );
    (l.useEffect(() => {
        (h.w(), u.DZ.loadIfNecessary());
    }, []),
        l.useEffect(() => {
            0 === S.length && 0 === P.length && j();
        }, [S.length, P, j]),
        l.useEffect(
            () => () => {
                let e = _.current;
                C || null == e || D(e);
            },
            [C, D]
        ),
        (0, c.Z)(
            {
                type: i.ImpressionTypes.POPOUT,
                name: i.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: T,
                    guild_id: t,
                    media_session_id: w
                }
            },
            { disableTrack: !I }
        ));
    let U = l.useCallback((e) => {
            ((_.current = e), A(null == e ? void 0 : e.soundId));
        }, []),
        k = l.useCallback(
            (e) => {
                if (null == e) return void U(null);
                let t = S[e];
                null != t && U(t);
            },
            [U, S]
        ),
        M = l.useCallback(
            (e) => {
                if (null == e) return;
                let t = S[e];
                null != t && D(t);
            },
            [S, D]
        ),
        L = l.useMemo(
            () =>
                S.map((e) =>
                    (0, r.jsx)(
                        v.ZP,
                        {
                            interactive: I,
                            className: N.soundButton,
                            sound: e,
                            focused: Z === e.soundId,
                            channel: n
                        },
                        e.soundId
                    )
                ),
            [Z, n, I, S]
        );
    return 0 === S.length
        ? null
        : (0, r.jsx)(s.Gt, {
              value: R,
              children: (0, r.jsx)(b.Z, {
                  wheelWidth: x,
                  wheelHeight: E,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !C,
                  activeItem: Z,
                  onItemSelect: k,
                  onItemAction: M,
                  onClose: j,
                  interactive: I,
                  children: L
              })
          });
}
