n.d(t, { Z: () => E }), n(47120), n(653041);
var l = n(200651),
    i = n(192379),
    a = n(990547),
    r = n(442837),
    o = n(100527),
    s = n(906732),
    c = n(213609),
    u = n(675478),
    d = n(19780),
    h = n(709054),
    f = n(208049),
    g = n(763296),
    p = n(242291),
    N = n(174470),
    v = n(549771),
    x = n(964398),
    m = n(409673),
    C = n(710111),
    I = n(279288);
function E(e) {
    let { guildId: t, channel: n, width: E, height: T, keepOpen: y, interactive: Z = !0, analyticsSource: O, onClose: b } = e,
        _ = (function (e) {
            let [t, n] = (0, r.Wu)([g.Z], () => [g.Z.getSounds(), g.Z.getFavorites()]);
            return i.useMemo(() => {
                let l = [],
                    i = [...e, C.X8],
                    a = (e, i) => {
                        var a, r;
                        for (let o of null !== (r = null === (a = t.get(e)) || void 0 === a ? void 0 : a.sort((e, t) => h.default.compare(e.soundId, t.soundId))) && void 0 !== r ? r : []) {
                            let e = n.has(o.soundId);
                            ((e && i) || (!e && !i)) && o.available && l.push(o);
                        }
                    };
                return i.forEach((e) => a(e, !0)), i.forEach((e) => a(e, !1)), l;
            }, [t, n, e]);
        })((0, v.h)(n, !0)),
        S = (0, N.j)(),
        w = i.useRef(null),
        [A, P] = i.useState(void 0),
        j = (0, r.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: R } = (0, s.ZP)(o.Z.SOUNDBOARD_WHEEL),
        k = i.useCallback(
            (e) => {
                (0, p.GN)(e, n.id, R), b();
            },
            [R, n.id, b]
        );
    i.useEffect(() => {
        f.w(), u.DZ.loadIfNecessary();
    }, []),
        i.useEffect(() => {
            0 === _.length && 0 === S.length && b();
        }, [_.length, S, b]),
        i.useEffect(
            () => () => {
                let e = w.current;
                y || null == e || k(e);
            },
            [y, k]
        ),
        (0, c.Z)(
            {
                type: a.ImpressionTypes.POPOUT,
                name: a.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: O,
                    guild_id: t,
                    media_session_id: j
                }
            },
            { disableTrack: !Z }
        );
    let D = i.useCallback((e) => {
            (w.current = e), P(null == e ? void 0 : e.soundId);
        }, []),
        F = i.useCallback(
            (e) => {
                if (null == e) {
                    D(null);
                    return;
                }
                let t = _[e];
                null != t && D(t);
            },
            [D, _]
        ),
        M = i.useCallback(
            (e) => {
                if (null == e) return;
                let t = _[e];
                null != t && k(t);
            },
            [_, k]
        ),
        B = i.useMemo(
            () =>
                _.map((e) =>
                    (0, l.jsx)(
                        m.ZP,
                        {
                            interactive: Z,
                            className: I.soundButton,
                            sound: e,
                            focused: A === e.soundId,
                            channel: n
                        },
                        e.soundId
                    )
                ),
            [A, n, Z, _]
        );
    return 0 === _.length
        ? null
        : (0, l.jsx)(s.Gt, {
              value: R,
              children: (0, l.jsx)(x.Z, {
                  wheelWidth: E,
                  wheelHeight: T,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !y,
                  activeItem: A,
                  onItemSelect: F,
                  onItemAction: M,
                  interactive: Z,
                  children: B
              })
          });
}
