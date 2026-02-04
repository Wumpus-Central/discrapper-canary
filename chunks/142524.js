n.d(t, {
    A: () => S,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(311907),
    s = n(80682),
    c = n(643501),
    u = n(616356),
    d = n(961350),
    f = n(71393),
    p = n(576705),
    m = n(290863),
    g = n(977997),
    y = n(954571),
    b = n(279250),
    h = n(834757),
    A = n(727353),
    _ = n(652215),
    v = n(945354);
class O extends i.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        y.default.track(_.HAw.OPEN_POPOUT, {
            type: "Stream Preview",
            other_user_id: e.id,
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
            is_streaming: !0,
        });
    }
    render() {
        let {
            activity: e,
            user: t,
            stream: n,
            previewIsOpen: i,
            onAction: l,
            hideTip: o,
            onWatch: s,
            activeStream: c,
            currentUserId: u,
            canWatch: d,
            unavailableReason: f,
            streamApplication: p,
        } = this.props;
        return null == n
            ? null
            : (0, r.jsx)("div", {
                  className: a()(v.yt, {
                      [v.P0]: i,
                  }),
                  children: (0, r.jsx)(A.Z, {
                      stream: n,
                      activeStream: c,
                      streamActivity: e,
                      streamApplication: p,
                      user: t,
                      currentUserId: u,
                      canWatch: null != d && d,
                      unavailableReason: f,
                      onWatchStream: s,
                      onAction: l,
                      hideTip: o,
                      className: v.Rh,
                  }),
              });
    }
}

function S(e) {
    var t, n;
    let { user: l, channel: a } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["user", "channel"]),
        [A, _] = (0, o.yK)([g.A, f.A, p.A, c.default], () => (0, b.eo)(a, g.A, f.A, p.A, c.default)),
        v = (0, o.bG)([u.A], () => u.A.getStreamForUser(l.id, a.getGuildId())),
        S = (0, o.bG)([u.A], () => u.A.getActiveStreamForApplicationStream(v)),
        j = (0, o.bG)([d.default], () => d.default.getId()),
        I = (0, h.AO)(v),
        x = (0, o.bG)([m.A], () => (0, h.nr)(v, m.A)),
        E = i.useMemo(
            () => ({
                [a.guild_id]: [l.id],
            }),
            [a.guild_id, l.id],
        );
    return (
        (0, s.E)(E, "StreamPreviewPopout"),
        (0, r.jsx)(
            O,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, y)),
            (n = n =
                {
                    canWatch: A,
                    unavailableReason: _,
                    user: l,
                    streamApplication: I,
                    stream: v,
                    activeStream: S,
                    currentUserId: j,
                    activity: x,
                    channel: a,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        )
    );
}
