n.d(t, { Z: () => C }), n(388685);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    c = n(717881),
    u = n(616780),
    d = n(850827),
    p = n(576855),
    f = n(258609),
    m = n(199902),
    g = n(314897),
    b = n(430824),
    O = n(496675),
    h = n(158776),
    y = n(979651),
    v = n(626135),
    S = n(102172),
    j = n(687516),
    N = n(718805),
    P = n(871118),
    E = n(981631),
    Z = n(388032),
    I = n(768780);
class x extends l.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        v.default.track(E.rMx.OPEN_POPOUT, {
            type: 'Stream Preview',
            other_user_id: e.id,
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
            is_streaming: !0
        });
    }
    renderPreview(e) {
        let { onWatch: t, activeStream: n, currentUserId: l, canWatch: i, unavailableReason: o } = this.props;
        return (0, r.jsxs)(s.P3F, {
            onClick: t,
            className: I.previewContainer,
            children: [
                (0, r.jsx)(P.Z, {
                    className: I.previewImage,
                    stream: e
                }),
                i
                    ? (0, r.jsx)('div', {
                          className: I.previewHover,
                          children: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              color: 'none',
                              className: I.white,
                              children: (0, N.Z)(e, n, l, o)
                          })
                      })
                    : null
            ]
        });
    }
    render() {
        let { activity: e, user: t, stream: n, previewIsOpen: l, onAction: i, hideTip: a } = this.props;
        return null == n
            ? null
            : (0, r.jsx)('div', {
                  className: o()(I.streamPreviewWrapper, { [I.mounted]: l }),
                  children: (0, r.jsxs)('div', {
                      className: I.streamPreview,
                      children: [
                          this.renderPreview(n),
                          (0, r.jsxs)('div', {
                              className: I.body,
                              children: [
                                  null != e
                                      ? (0, r.jsx)(c.Z, {
                                            hideHeader: !0,
                                            type: c.P.STREAM_PREVIEW,
                                            activity: e,
                                            user: t,
                                            guildId: n.guildId,
                                            channelId: n.channelId,
                                            analyticsParams: {
                                                location: {
                                                    page: E.ZY5.GO_LIVE_MODAL,
                                                    section: E.jXE.STREAM_VIEWER_POPOUT
                                                }
                                            },
                                            onAction: i
                                        })
                                      : (0, r.jsx)(d.Z, {
                                            type: c.P.STREAM_PREVIEW,
                                            applicationStream: n,
                                            user: t,
                                            guildId: n.guildId,
                                            channelId: n.channelId,
                                            className: I.activityActions,
                                            color: I.watchButton,
                                            onAction: i
                                        }),
                                  !a &&
                                      (0, r.jsx)(p.Z, {
                                          type: p.Z.Types.INLINE,
                                          className: I.protip,
                                          children: __OVERLAY__ ? Z.NW.string(Z.t['YRdw7+']) : Z.NW.string(Z.t.CCTgbG)
                                      })
                              ]
                          })
                      ]
                  })
              });
    }
}
function C(e) {
    var t,
        n,
        { user: i, channel: o } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['user', 'channel']);
    let [c, d] = (0, a.Wu)([y.Z, b.Z, O.Z, f.Z], () => (0, S.p9)(o, y.Z, b.Z, O.Z, f.Z)),
        p = (0, a.e7)([m.Z], () => m.Z.getStreamForUser(i.id, o.getGuildId())),
        v = (0, a.e7)([m.Z], () => m.Z.getActiveStreamForApplicationStream(p)),
        N = (0, a.e7)([g.default], () => g.default.getId()),
        P = (0, j.Cf)(p),
        E = (0, a.e7)([h.Z], () => (0, j.Um)(p, h.Z)),
        Z = l.useMemo(() => ({ [o.guild_id]: [i.id] }), [o.guild_id, i.id]);
    return (
        (0, u.$)(Z),
        (0, r.jsx)(
            x,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, s)),
            (n = n =
                {
                    canWatch: c,
                    unavailableReason: d,
                    user: i,
                    streamApplication: P,
                    stream: p,
                    activeStream: v,
                    currentUserId: N,
                    activity: E
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
            t)
        )
    );
}
