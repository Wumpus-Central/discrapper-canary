n.d(t, { Z: () => Z }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    c = n(717881),
    u = n(616780),
    d = n(850827),
    f = n(576855),
    p = n(258609),
    m = n(199902),
    g = n(314897),
    y = n(430824),
    b = n(496675),
    h = n(158776),
    v = n(979651),
    O = n(626135),
    j = n(102172),
    S = n(687516),
    N = n(718805),
    P = n(871118),
    I = n(981631),
    x = n(388032),
    E = n(651148);
class w extends l.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        O.default.track(I.rMx.OPEN_POPOUT, {
            type: 'Stream Preview',
            other_user_id: e.id,
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
            is_streaming: !0
        });
    }
    renderPreview(e) {
        let { onWatch: t, activeStream: n, currentUserId: l, canWatch: i, unavailableReason: a } = this.props;
        return (0, r.jsxs)(s.P3F, {
            onClick: t,
            className: E.previewContainer,
            children: [
                (0, r.jsx)(P.Z, {
                    className: E.previewImage,
                    stream: e
                }),
                i
                    ? (0, r.jsx)('div', {
                          className: E.previewHover,
                          children: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              color: 'none',
                              className: E.white,
                              children: (0, N.Z)(e, n, l, a)
                          })
                      })
                    : null
            ]
        });
    }
    render() {
        let { activity: e, user: t, stream: n, previewIsOpen: l, onAction: i, hideTip: o } = this.props;
        return null == n
            ? null
            : (0, r.jsx)('div', {
                  className: a()(E.streamPreviewWrapper, { [E.mounted]: l }),
                  children: (0, r.jsxs)('div', {
                      className: E.streamPreview,
                      children: [
                          this.renderPreview(n),
                          (0, r.jsxs)('div', {
                              className: E.body,
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
                                                    page: I.ZY5.GO_LIVE_MODAL,
                                                    section: I.jXE.STREAM_VIEWER_POPOUT
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
                                            className: E.activityActions,
                                            color: E.watchButton,
                                            onAction: i
                                        }),
                                  !o &&
                                      (0, r.jsx)(f.Z, {
                                          type: f.Z.Types.INLINE,
                                          className: E.protip,
                                          children: __OVERLAY__ ? x.NW.string(x.t['YRdw7+']) : x.NW.string(x.t.CCTgbG)
                                      })
                              ]
                          })
                      ]
                  })
              });
    }
}
function Z(e) {
    var t,
        n,
        { user: i, channel: a } = e,
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
    let [c, d] = (0, o.Wu)([v.Z, y.Z, b.Z, p.Z], () => (0, j.p9)(a, v.Z, y.Z, b.Z, p.Z)),
        f = (0, o.e7)([m.Z], () => m.Z.getStreamForUser(i.id, a.getGuildId())),
        O = (0, o.e7)([m.Z], () => m.Z.getActiveStreamForApplicationStream(f)),
        N = (0, o.e7)([g.default], () => g.default.getId()),
        P = (0, S.Cf)(f),
        I = (0, o.e7)([h.Z], () => (0, S.Um)(f, h.Z)),
        x = l.useMemo(() => ({ [a.guild_id]: [i.id] }), [a.guild_id, i.id]);
    return (
        (0, u.$)(x),
        (0, r.jsx)(
            w,
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
                    stream: f,
                    activeStream: O,
                    currentUserId: N,
                    activity: I
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
