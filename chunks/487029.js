n.d(t, { Z: () => T }), n(388685), n(642613), n(539854);
var l = n(54381),
    i = n(473749),
    r = n(990547),
    a = n(442837),
    o = n(100527),
    s = n(906732),
    u = n(213609),
    c = n(675478),
    d = n(19780),
    f = n(709054),
    g = n(208049),
    h = n(763296),
    p = n(242291),
    E = n(174470),
    N = n(549771),
    O = n(964398),
    y = n(294206),
    C = n(710111),
    _ = n(209062);
function T(e) {
    let {
            guildId: t,
            channel: n,
            width: T,
            height: m,
            keepOpen: I,
            interactive: S = !0,
            analyticsSource: b,
            onClose: v,
        } = e,
        x = (function (e) {
            let [t, n] = (0, a.Wu)([h.Z], () => [h.Z.getSounds(), h.Z.getFavorites()]);
            return i.useMemo(() => {
                let l = [],
                    i = [...e, C.X8],
                    r = (e, i) => {
                        var r, a;
                        for (let o of null !=
                        (a =
                            null == (r = t.get(e)) ? void 0 : r.sort((e, t) => f.default.compare(e.soundId, t.soundId)))
                            ? a
                            : []) {
                            let e = n.has(o.soundId);
                            ((e && i) || (!e && !i)) && o.available && l.push(o);
                        }
                    };
                return i.forEach((e) => r(e, !0)), i.forEach((e) => r(e, !1)), l;
            }, [t, n, e]);
        })((0, N.h)(n, !0)),
        P = (0, E.j)(),
        Z = i.useRef(null),
        [A, j] = i.useState(void 0),
        R = (0, a.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: D } = (0, s.ZP)(o.Z.SOUNDBOARD_WHEEL),
        w = i.useCallback(
            (e) => {
                (0, p.GN)(e, n.id, D), v();
            },
            [D, n.id, v],
        );
    i.useEffect(() => {
        g.w(), c.DZ.loadIfNecessary();
    }, []),
        i.useEffect(() => {
            0 === x.length && 0 === P.length && v();
        }, [x.length, P, v]),
        i.useEffect(
            () => () => {
                let e = Z.current;
                I || null == e || w(e);
            },
            [I, w],
        ),
        (0, u.Z)(
            {
                type: r.ImpressionTypes.POPOUT,
                name: r.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: b,
                    guild_id: t,
                    media_session_id: R,
                },
            },
            { disableTrack: !S },
        );
    let k = i.useCallback((e) => {
            (Z.current = e), j(null == e ? void 0 : e.soundId);
        }, []),
        M = i.useCallback(
            (e) => {
                if (null == e) return void k(null);
                let t = x[e];
                null != t && k(t);
            },
            [k, x],
        ),
        U = i.useCallback(
            (e) => {
                if (null == e) return;
                let t = x[e];
                null != t && w(t);
            },
            [x, w],
        ),
        L = i.useMemo(
            () =>
                x.map((e) =>
                    (0, l.jsx)(
                        y.ZP,
                        {
                            interactive: S,
                            className: _.soundButton,
                            sound: e,
                            focused: A === e.soundId,
                            channel: n,
                        },
                        e.soundId,
                    ),
                ),
            [A, n, S, x],
        );
    return 0 === x.length
        ? null
        : (0, l.jsx)(s.Gt, {
              value: D,
              children: (0, l.jsx)(O.Z, {
                  wheelWidth: T,
                  wheelHeight: m,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !I,
                  activeItem: A,
                  onItemSelect: M,
                  onItemAction: U,
                  onClose: v,
                  interactive: S,
                  children: L,
              }),
          });
}
