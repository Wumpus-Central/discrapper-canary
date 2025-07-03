(n.d(t, {
    G: () => eE,
    Z: () => eZ
}),
    n(997841),
    n(953529),
    n(290780));
var i = n(255367),
    l = n(73800),
    r = n(120356),
    s = n.n(r),
    a = n(313361),
    o = n(697988),
    c = n(683860),
    d = n(442837),
    u = n(692547),
    h = n(780384),
    m = n(481060),
    g = n(787014),
    p = n(771340),
    f = n(410575),
    x = n(852860),
    j = n(129865),
    b = n(902840),
    v = n(429673),
    y = n(933557),
    C = n(541716),
    N = n(752305),
    S = n(893718),
    O = n(600164),
    E = n(313201),
    T = n(318766),
    w = n(907040),
    Z = n(906411),
    R = n(633302),
    I = n(109434),
    _ = n(162389),
    P = n(946458),
    A = n(968437),
    L = n(665906),
    k = n(456077),
    D = n(747212),
    M = n(210887),
    B = n(131704),
    U = n(314897),
    V = n(388610),
    W = n(430824),
    H = n(496675),
    G = n(903223),
    F = n(594174),
    z = n(934415),
    X = n(70956),
    Y = n(630388),
    J = n(63063),
    q = n(129724),
    $ = n(732335),
    Q = n(296146),
    K = n(564735),
    ee = n(981631),
    et = n(176505),
    en = n(185923),
    ei = n(710352),
    el = n(124368),
    er = n(388032),
    es = n(194512),
    ea = n(20493);
function eo(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function ec(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                eo(e, t, n[t]);
            }));
    }
    return e;
}
function ed(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eu = (0, E.hQ)(),
    eh = (0, E.hQ)(),
    em = (0, E.hQ)(),
    eg = (0, E.hQ)(),
    ep = (0, E.hQ)(),
    ef = (0, E.hQ)(),
    ex = (0, E.hQ)(),
    ej = (0, E.hQ)(),
    eb = (0, E.hQ)(),
    ev = (0, E.hQ)(),
    ey = (0, E.hQ)(),
    eC = (0, B.kt)({
        id: '1',
        type: ee.d4z.DM
    }),
    eN = {
        popoutLocation: {
            page: ee.ZY5.CHANNEL_SETTINGS,
            section: ee.jXE.CHANNEL_DEFAULT_REACTION,
            object: ee.qAy.EMOJI_PICKER_BUTTON
        }
    },
    eS = {
        popoutLocation: {
            page: ee.ZY5.CHANNEL_SETTINGS,
            section: ee.jXE.CHANNEL_NAME,
            object: ee.qAy.EMOJI_PICKER_BUTTON
        }
    },
    eO = 'AUTOMATIC_RTC_REGION',
    eE = d.ZP.connectStores([V.Z], () => {
        let { channel: e, submitting: t } = V.Z.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, g.S1)(e.id);
            },
            onSave() {
                if (null == e) return;
                let { name: t, type: n, topic: i, bitrate: l, userLimit: r, nsfw: s, flags: a, rateLimitPerUser: o, defaultThreadRateLimitPerUser: c, threadMetadata: d, defaultAutoArchiveDuration: u, template: h, rtcRegion: m, videoQualityMode: p, defaultReactionEmoji: f, availableTags: x, defaultSortOrder: j, defaultForumLayout: b, defaultTagSetting: v } = e;
                (e.isThread() && (t = (0, k.Z)(t, !0)),
                    (0, g.wk)(e.id, {
                        name: t,
                        type: n,
                        topic: i,
                        bitrate: l,
                        userLimit: r,
                        nsfw: s,
                        flags: a,
                        rateLimitPerUser: o,
                        defaultThreadRateLimitPerUser: c,
                        autoArchiveDuration: null == d ? void 0 : d.autoArchiveDuration,
                        locked: null == d ? void 0 : d.locked,
                        invitable: null == d ? void 0 : d.invitable,
                        defaultAutoArchiveDuration: u,
                        template: h,
                        rtcRegion: m,
                        videoQualityMode: p,
                        defaultReactionEmoji: f,
                        availableTags: x,
                        defaultSortOrder: j,
                        defaultForumLayout: b,
                        defaultTagSetting: v
                    }));
            }
        };
    })(x.Z);
function eT(e) {
    let { onEmojiPicked: t, channel: n, guildId: r } = e,
        s = l.useRef(null),
        a = l.useCallback(
            (e) => {
                let { closePopout: l } = e;
                return (0, i.jsx)(w.Z, {
                    channel: n,
                    guildId: r,
                    pickerIntention: en.Hz.CHANNEL_NAME,
                    closePopout: l,
                    onNavigateAway: l,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        (null != n && n.type === Z.B.UNICODE && t(n.surrogates), i && l());
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: eS
                });
            },
            [n, r, t]
        );
    return (0, i.jsx)(m.yRy, {
        targetElementRef: s,
        renderPopout: a,
        animation: m.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(
                T.Z,
                ed(ec({}, e), {
                    ref: s,
                    active: n,
                    className: es.emojiButton,
                    tabIndex: 0,
                    focusProps: {
                        offset: {
                            top: 10,
                            bottom: 10,
                            left: -4,
                            right: 10
                        }
                    }
                })
            );
        }
    });
}
class ew extends l.PureComponent {
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && p.Z.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        var t, n, i, l;
        let r = null != (i = null == (t = this.props.channel) ? void 0 : t.topic) ? i : '';
        (null != (l = null == (n = e.channel) ? void 0 : n.topic) ? l : '') !== r &&
            r !== this.state.textTopicValue &&
            this.setState({
                textTopicValue: r,
                richTopicValue: (0, N.JM)(r)
            });
    }
    getError(e) {
        let { errors: t } = this.props;
        return null == t ? void 0 : t[e];
    }
    getCooldownSliderMarker(e) {
        return (0, q.A)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, q.A)(e * X.Z.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        var n, l, r, d, h, g;
        let p,
            x,
            { canManageChannels: j, canSendMessages: b, isThreadModerator: v, canManageThread: y, guild: N, isForumPost: O, isOwner: E, showAdvancedSlowModeSetting: T } = this.props,
            w = B.Ec.has(e.type),
            Z = e.isForumLikeChannel(),
            I = Z && (null == (n = e.availableTags) ? void 0 : n.every((e) => e.moderated)),
            L = (null == (l = F.default.getCurrentUser()) ? void 0 : l.isStaff()) === !0,
            k = B.TK.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(m.xJW, {
                              title: Z ? er.intl.string(er.t.yR6Hwc) : er.intl.string(er.t.X8jMDg),
                              className: ea.marginTop20,
                              children: (0, i.jsx)(S.Z, {
                                  innerClassName: es.topic,
                                  characterCountClassName: es.topicCharacterCount,
                                  maxCharacterCount: Z ? et.Z7 : et.$x,
                                  onChange: this.handleChangeRichTopic,
                                  placeholder: er.intl.string(er.t['71fbmp']),
                                  channel: eC,
                                  textValue: this.state.textTopicValue,
                                  richValue: this.state.richTopicValue,
                                  type: Z ? C.Ie.FORUM_CHANNEL_GUIDELINES : C.Ie.CHANNEL_TOPIC,
                                  onFocus: () => {
                                      this.setState({ topicFocused: !0 });
                                  },
                                  onBlur: () => {
                                      this.setState({ topicFocused: !1 });
                                  },
                                  focused: this.state.topicFocused,
                                  onSubmit: this.handleSubmit,
                                  disableThemedBackground: !0,
                                  error: this.getError('topic'),
                                  disabled: !j
                              })
                          }),
                          (0, i.jsx)(m.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) })
                      ]
                  })
                : null,
            M =
                Z && L
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(m.xJW, {
                                  title: er.intl.string(er.t.qk2jdX),
                                  className: ea.marginTop20,
                                  children: (0, i.jsx)(m.Kx8, {
                                      placeholder: er.intl.string(er.t.DDjD1N),
                                      value: R.ZP.translateSurrogatesToInlineEmoji(null != (r = e.template) ? r : ''),
                                      onChange: this.handleChangeTemplate,
                                      error: this.getError('template'),
                                      maxLength: ei.Vb,
                                      disabled: !j,
                                      autosize: !0
                                  })
                              }),
                              (0, i.jsx)(m.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) })
                          ]
                      })
                    : null,
            U = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(m.xJW, {
                              children: [
                                  (0, i.jsx)(m.vwX, {
                                      error: this.getError('available_tags'),
                                      id: eu,
                                      className: es.formTitle,
                                      children: er.intl.string(er.t['P/y+sr'])
                                  }),
                                  (0, i.jsx)(m.R94, {
                                      id: eh,
                                      type: m.R94.Types.DESCRIPTION,
                                      className: es.description,
                                      children: er.intl.string(er.t['/oQQ39'])
                                  }),
                                  (0, i.jsx)(_.Z, { channel: e })
                              ]
                          }),
                          (0, i.jsx)(m.XZJ, {
                              disabled: !j || I,
                              value: e.hasFlag(et.zZ.REQUIRE_TAG),
                              type: m.XZJ.Types.INVERTED,
                              onChange: (e, t) => this.handleRequireTagChanged(t),
                              children: (0, i.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  children: er.intl.string(er.t['9g2Zys'])
                              })
                          }),
                          (0, i.jsx)(m.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) })
                      ]
                  })
                : null,
            V = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: es.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(m.xJW, {
                                      className: s()(es.settingsLeft, es.settingsDefaultReaction),
                                      children: [
                                          (0, i.jsx)(m.vwX, {
                                              id: em,
                                              className: es.formTitle,
                                              children: er.intl.string(er.t['8ao1+P'])
                                          }),
                                          (0, i.jsx)(m.R94, {
                                              id: eh,
                                              type: m.R94.Types.DESCRIPTION,
                                              className: es.description,
                                              children: er.intl.string(er.t.SdbF0t)
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: es.buttonRow,
                                              children: [
                                                  (0, i.jsx)(m.yRy, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: 'right',
                                                      animation: m.yRy.Animation.NONE,
                                                      align: 'center',
                                                      children: (e) =>
                                                          (0, i.jsx)(
                                                              m.zxk,
                                                              ed(ec({}, e), {
                                                                  buttonRef: this.defaultReactionButtonRef,
                                                                  disabled: !j,
                                                                  onClick: (t) => {
                                                                      var n;
                                                                      null == (n = e.onClick) || n.call(e, t);
                                                                  },
                                                                  children: er.intl.string(er.t['59QgaG'])
                                                              })
                                                          )
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, i.jsx)(m.zxk, {
                                                            className: es.removeButton,
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            size: m.zxk.Sizes.MIN,
                                                            look: m.zxk.Looks.LINK,
                                                            color: m.zxk.Colors.RED,
                                                            children: er.intl.string(er.t.N86XcH)
                                                        })
                                                      : null
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(P.Z, { reactionEmoji: e.defaultReactionEmoji })
                              ]
                          }),
                          (0, i.jsx)(m.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) })
                      ]
                  })
                : null,
            W = e.isForumChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: es.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(m.xJW, {
                                      className: s()(es.settingsLeft, es.settingsDefaultView),
                                      children: [
                                          (0, i.jsx)(m.hjN, {
                                              title: er.intl.string(er.t.kQvoCw),
                                              children: (0, i.jsx)(m.q4e, {
                                                  options: [
                                                      {
                                                          label: er.intl.string(er.t['4HXEZG']),
                                                          value: a.X.LIST
                                                      },
                                                      {
                                                          label: er.intl.string(er.t['8RswJC']),
                                                          value: a.X.GRID
                                                      }
                                                  ],
                                                  value: null != (d = e.defaultForumLayout) ? d : a.X.LIST,
                                                  onChange: this.handleChangeDefaultForumLayout
                                              })
                                          }),
                                          (0, i.jsx)(m.R94, {
                                              className: ea.marginTop8,
                                              type: m.R94.Types.DESCRIPTION,
                                              children: er.intl.string(er.t.mOSViY)
                                          })
                                      ]
                                  }),
                                  e.defaultForumLayout === a.X.GRID ? (0, i.jsx)(Q.Z, { className: es.defaultImageView }) : (0, i.jsx)(K.Z, { className: es.defaultImageView })
                              ]
                          }),
                          (0, i.jsx)(m.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) })
                      ]
                  })
                : null,
            H = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(m.xJW, {
                              children: (0, i.jsx)(m.hjN, {
                                  title: er.intl.string(er.t.gePre3),
                                  children: (0, i.jsx)(m.q4e, {
                                      options: [
                                          {
                                              label: er.intl.string(er.t.ElZtzs),
                                              value: c.z.LATEST_ACTIVITY
                                          },
                                          {
                                              label: er.intl.string(er.t.w28f3N),
                                              value: c.z.CREATION_DATE
                                          }
                                      ],
                                      value: e.getDefaultSortOrder(),
                                      onChange: this.handleChangeDefaultSortOrder
                                  })
                              })
                          }),
                          (0, i.jsx)(m.R94, {
                              className: ea.marginTop8,
                              type: m.R94.Types.DESCRIPTION,
                              children: er.intl.string(er.t['165cVV'])
                          }),
                          (0, i.jsx)(m.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) })
                      ]
                  })
                : null,
            G = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(m.xJW, {
                              children: (0, i.jsx)(m.hjN, {
                                  title: er.intl.string(er.t.Paxaur),
                                  children: (0, i.jsx)(m.q4e, {
                                      options: [
                                          {
                                              label: er.intl.string(er.t.rQ0ctb),
                                              value: o.z.MATCH_SOME
                                          },
                                          {
                                              label: er.intl.string(er.t.FCXUu7),
                                              value: o.z.MATCH_ALL
                                          }
                                      ],
                                      value: e.getDefaultTagSetting(),
                                      onChange: this.handleChangeDefaultTagSetting
                                  })
                              })
                          }),
                          (0, i.jsx)(m.R94, {
                              className: ea.marginTop8,
                              type: m.R94.Types.DESCRIPTION,
                              children: er.intl.string(er.t.DqOl8P)
                          }),
                          (0, i.jsx)(m.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) })
                      ]
                  })
                : null,
            z = w ? v : j,
            X = B.X_.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(m.xJW, {
                              children: [
                                  (0, i.jsx)(m.vwX, {
                                      id: eg,
                                      className: ea.marginBottom8,
                                      children: er.intl.string(er.t['tTHx9/'])
                                  }),
                                  Z
                                      ? (0, i.jsx)(m.vwX, {
                                            className: ea.marginTop20,
                                            children: er.intl.string(er.t.O1c02t)
                                        })
                                      : null,
                                  !0 === T
                                      ? (0, i.jsx)($.Z, {
                                            channel: e,
                                            onChange: this.handleChangeSlowmode
                                        })
                                      : (0, i.jsx)(m.iRW, {
                                            className: ea.marginTop20,
                                            initialValue: e.rateLimitPerUser,
                                            markers: ee.BiE,
                                            stickToMarkers: !0,
                                            onValueChange: this.handleChangeSlowmode,
                                            onMarkerRender: this.getCooldownSliderMarker,
                                            disabled: !z,
                                            equidistant: !0,
                                            'aria-labelledby': eg,
                                            'aria-describedby': ep
                                        }),
                                  (0, i.jsx)(m.R94, {
                                      id: ep,
                                      type: m.R94.Types.DESCRIPTION,
                                      children: Z ? er.intl.string(er.t['a+1pdH']) : w ? er.intl.string(er.t.OMmNCg) : er.intl.string(er.t['HEA/DQ'])
                                  }),
                                  Z
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(m.vwX, {
                                                    className: ea.marginTop20,
                                                    children: er.intl.string(er.t['fkY5+v'])
                                                }),
                                                (0, i.jsx)(m.iRW, {
                                                    className: ea.marginTop20,
                                                    initialValue: null != (h = e.defaultThreadRateLimitPerUser) ? h : 0,
                                                    markers: ee.BiE,
                                                    stickToMarkers: !0,
                                                    onValueChange: this.handleChangeThreadMessageSlowmode,
                                                    onMarkerRender: this.getCooldownSliderMarker,
                                                    disabled: !z,
                                                    equidistant: !0,
                                                    'aria-labelledby': eg,
                                                    'aria-describedby': ep
                                                }),
                                                (0, i.jsx)(m.R94, {
                                                    type: m.R94.Types.DESCRIPTION,
                                                    children: er.intl.string(er.t.kdZU6O)
                                                })
                                            ]
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsx)(m.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) })
                      ]
                  })
                : null,
            Y =
                w && null != e.threadMetadata
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(m.xJW, {
                                  children: (0, i.jsx)(f.Z, {
                                      page: ee.ZY5.CHANNEL_SETTINGS,
                                      children: (0, i.jsx)(D.Z, {
                                          isDisabled: !y,
                                          autoArchiveDuration: null != (g = e.threadMetadata.autoArchiveDuration) ? g : el.AX,
                                          onChange: this.handleAutoArchiveDurationChanged
                                      })
                                  })
                              }),
                              (0, i.jsx)(m.R94, {
                                  className: ea.marginTop8,
                                  type: m.R94.Types.DESCRIPTION,
                                  children: O ? er.intl.string(er.t['3aJN9P']) : er.intl.string(er.t.YUXr4e)
                              })
                          ]
                      })
                    : null,
            q =
                e.type === ee.d4z.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(m.j7V, {
                              note: er.intl.string(er.t.cSyXJi),
                              onChange: this.handleInvitableChanged,
                              value: e.threadMetadata.invitable,
                              hideBorder: !0,
                              disabled: !y,
                              children: er.intl.string(er.t.s2rpNT)
                          })
                      })
                    : null,
            en = B.ov.has(e.type)
                ? (0, i.jsx)('div', {
                      children: (0, i.jsx)(m.j7V, {
                          note: er.intl.string(er.t['9eUgwc']),
                          onChange: this.handleNSFWChange,
                          value: e.isNSFW(),
                          hideBorder: !0,
                          disabled: !j || null != e.linkedLobby,
                          disabledText: null != e.linkedLobby ? er.intl.string(er.t.l6uSVV) : null,
                          children: er.intl.string(er.t.Es25YW)
                      })
                  })
                : null,
            eo =
                B.Y0.has(e.type) && null != N && N.features.has(ee.oNc.NEWS) && e.id !== (null == N ? void 0 : N.rulesChannelId) && e.id !== (null == N ? void 0 : N.publicUpdatesChannelId)
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(m.j7V, {
                              note: (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('div', { children: er.intl.format(er.t.tI7KNT, { documentationLink: J.Z.getArticleURL(ee.BhN.ANNOUNCEMENT_CHANNELS) }) }),
                                      (0, i.jsx)('div', {
                                          className: ea.marginTop8,
                                          children: er.intl.string(er.t['2Ab4IS'])
                                      })
                                  ]
                              }),
                              onChange: this.handleNewsChange,
                              value: e.type === ee.d4z.GUILD_ANNOUNCEMENT,
                              hideBorder: !0,
                              disabled: !j,
                              children: er.intl.string(er.t.Au2b7u)
                          })
                      })
                    : null,
            ef = B.uC.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(m.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) }),
                          (0, i.jsx)(f.Z, {
                              page: ee.ZY5.CHANNEL_SETTINGS,
                              children: (0, i.jsx)(D.Z, {
                                  isDisabled: !j,
                                  autoArchiveDuration: (0, A.WD)(e, null),
                                  onChange: this.handleChangeDefaultAutoArchiveDuration
                              })
                          }),
                          (0, i.jsx)(m.R94, {
                              className: ea.marginTop8,
                              type: m.R94.Types.DESCRIPTION,
                              children: e.isForumLikeChannel() ? er.intl.string(er.t.fyXclZ) : er.intl.string(er.t.W3Noi4)
                          })
                      ]
                  })
                : null,
            ex = this.props.showChannelSummariesSettings
                ? (0, i.jsx)(m.j7V, {
                      note: er.intl.format(er.t.feJW19, { helpdeskArticle: J.Z.getArticleURL(ee.BhN.CONVERSATION_SUMMARIES) }),
                      onChange: this.handleChannelSummariesToggled,
                      value: !e.hasFlag(et.zZ.SUMMARIES_DISABLED) && (null == N ? void 0 : N.features.has(ee.oNc.SUMMARIES_ENABLED_BY_USER)),
                      hideBorder: !0,
                      disabled: !j || !(null == N ? void 0 : N.features.has(ee.oNc.SUMMARIES_ENABLED_BY_USER)),
                      children: (0, i.jsxs)('div', {
                          className: es.badgedItem,
                          children: [
                              er.intl.string(er.t.id3ozs),
                              (0, i.jsx)(m.IGR, {
                                  text: er.intl.string(er.t.oW0eUV),
                                  color: u.Z.colors.BG_BRAND.css
                              })
                          ]
                      })
                  })
                : null,
            ej = e.isMediaChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(m.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) }),
                          (0, i.jsx)(m.j7V, {
                              onChange: this.handleShowMediaOptionsToggled,
                              value: !e.hasFlag(et.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                              note: er.intl.string(er.t.J4wCc3),
                              hideBorder: !0,
                              disabled: !j,
                              children: er.intl.string(er.t.u8LZOj)
                          })
                      ]
                  })
                : null;
        return (
            e.type === ee.d4z.GUILD_CATEGORY ? ((x = er.intl.string(er.t.OCAkGB)), (p = 'category-name')) : e.isForumPost() ? ((x = er.intl.string(er.t.uyVrTE)), (p = 'post-title')) : w ? ((x = er.intl.string(er.t.j3XWjI)), (p = 'thread-name')) : ((x = er.intl.string(er.t.PVbHDg)), (p = 'channel-name')),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(m.xJW, {
                        title: x,
                        children: this.props.isEmojiInChannelNamesEnabled
                            ? (0, i.jsxs)('div', {
                                  className: es.nameInput,
                                  children: [
                                      (0, i.jsx)(m.oil, {
                                          inputRef: this.nameInputRef,
                                          value: t,
                                          onChange: this.handleChangeName,
                                          onBlur: this.handleBlurName,
                                          error: this.getError('name'),
                                          name: p,
                                          autoFocus: !0,
                                          disabled: E ? !b : !j,
                                          maxLength: ee.HN8,
                                          className: es.nameInputWrapperWithEmojiPicker,
                                          inputClassName: es.nameInputInnerWithEmojiPicker,
                                          focusProps: { offset: { right: -30 } }
                                      }),
                                      (0, i.jsx)(eT, {
                                          onEmojiPicked: this.insertEmojiAtPosition,
                                          channel: e,
                                          guildId: null == e ? void 0 : e.guild_id
                                      })
                                  ]
                              })
                            : (0, i.jsx)(m.oil, {
                                  inputRef: this.nameInputRef,
                                  value: t,
                                  onChange: this.handleChangeName,
                                  onBlur: this.handleBlurName,
                                  error: this.getError('name'),
                                  name: p,
                                  autoFocus: !0,
                                  disabled: E ? !b : !j,
                                  maxLength: ee.HN8
                              })
                    }),
                    (0, i.jsx)(m.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) }),
                    k,
                    M,
                    U,
                    V,
                    X,
                    Y,
                    W,
                    H,
                    G,
                    q,
                    en,
                    eo,
                    ex,
                    ef,
                    ej
                ]
            })
        );
    }
    renderBitrate(e) {
        return ''.concat(Math.round(e / 1000), 'kbps');
    }
    renderVoiceBitrate(e, t) {
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let l = (0, z.g7)(t, e),
            r = this.getError('bitrate');
        return (0, i.jsxs)(O.Z, {
            direction: O.Z.Direction.VERTICAL,
            className: ea.marginBottom40,
            children: [
                (0, i.jsx)(m.vwX, {
                    id: ef,
                    children: er.intl.string(er.t.w2d0vb)
                }),
                '' !== r &&
                    (0, i.jsx)(m.R94, {
                        id: ex,
                        type: m.geA.DESCRIPTION,
                        style: { color: u.Z.unsafe_rawColors.RED_400.css },
                        className: ea.marginBottom8,
                        children: r
                    }),
                (0, i.jsx)(m.iRW, {
                    initialValue: Math.min(e.bitrate, l),
                    onValueChange: this.handleChangeBitrate,
                    onValueRender: this.renderBitrate,
                    onMarkerRender: this.renderBitrate,
                    markers: [ee.Fc, ee.epw, l],
                    minValue: ee.Fc,
                    maxValue: l,
                    keyboardStep: ee.V7H,
                    disabled: !n,
                    'aria-labelledby': ef,
                    'aria-describedby': null != r && '' !== r ? ex : ej
                }),
                l > ee.epw
                    ? (0, i.jsx)(m.R94, {
                          id: ej,
                          type: m.geA.DESCRIPTION,
                          children: er.intl.format(er.t.SbQJk5, { bitrate: ee.epw / 1000 })
                      })
                    : null
            ]
        });
    }
    showVoiceSettings() {
        let { channel: e } = this.props;
        return (
            null != e &&
            null != e.guild_id &&
            B.vg.has(e.type) &&
            (e.isGuildVocal() ||
                L.tM.getCurrentConfig({
                    guildId: e.guild_id,
                    location: '9b50bd_1'
                }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        var t;
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let l = [
            {
                value: ee.Ucd.AUTO,
                name: er.intl.string(er.t.jjKYpq)
            },
            {
                value: ee.Ucd.FULL,
                name: er.intl.string(er.t['7jOoJC'])
            }
        ];
        return (0, i.jsxs)(O.Z, {
            direction: O.Z.Direction.VERTICAL,
            className: ea.marginBottom40,
            children: [
                (0, i.jsx)(m.xJW, {
                    title: er.intl.string(er.t.jhJEJi),
                    children: (0, i.jsx)(m.FXm, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return this.handleVideoQualityModeChange(t);
                        },
                        options: l,
                        value: null != (t = e.videoQualityMode) ? t : ee.Ucd.AUTO,
                        disabled: !n
                    })
                }),
                (0, i.jsx)(m.R94, {
                    type: m.geA.DESCRIPTION,
                    children: er.intl.format(er.t.c5W7Sk, {})
                })
            ]
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e)) ? er.intl.string(er.t.XX5ciY) : er.intl.formatToPlainString(er.t['3uHFUV'], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError('user_limit'),
            l = e.isGuildStageVoice() ? ee.xGv : ee.$pe;
        return (0, i.jsxs)(O.Z, {
            direction: O.Z.Direction.VERTICAL,
            className: ea.marginBottom40,
            children: [
                (0, i.jsx)(m.vwX, {
                    id: eb,
                    children: er.intl.string(er.t['/AoSGB'])
                }),
                '' !== n &&
                    (0, i.jsx)(m.R94, {
                        id: ev,
                        type: m.geA.DESCRIPTION,
                        style: { color: u.Z.unsafe_rawColors.RED_400.css },
                        className: ea.marginBottom8,
                        children: n
                    }),
                (0, i.jsx)(m.iRW, {
                    initialValue: Math.min(e.userLimit, l),
                    onValueChange: this.handleUserLimitChange,
                    onValueRender: this.onRenderUserLimit,
                    onMarkerRender: (e) => (0 === Math.round(e) ? '\u221E' : e),
                    markers: [0, l],
                    minValue: 0,
                    maxValue: l,
                    disabled: !t,
                    'aria-labelledby': eb,
                    'aria-describedby': null != n && '' !== n ? ev : ey
                }),
                (0, i.jsx)(m.R94, {
                    id: ey,
                    type: m.geA.DESCRIPTION,
                    children: er.intl.format(e.isGuildStageVoice() ? er.t.OqZI8P : er.t['8yb3JS'], {})
                })
            ]
        });
    }
    renderRegionOverride(e) {
        var t;
        let { regions: n, canManageChannels: l, guild: r } = this.props;
        if (null == r || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
        let s = [];
        null != n &&
            (s = n
                .filter((e) => !e.deprecated && !e.hidden)
                .map((e) => ({
                    label: e.name,
                    value: e.id
                }))).unshift({
                label: er.intl.string(er.t.JEmsam),
                value: eO
            });
        let a = null != (t = e.rtcRegion) ? t : eO;
        return (0, i.jsxs)(O.Z, {
            direction: O.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)(m.vwX, { children: er.intl.string(er.t.Ms8bX1) }),
                (0, i.jsx)(m.q4e, {
                    options: s,
                    value: a,
                    onChange: this.handleRegionChange,
                    isDisabled: !l
                }),
                (0, i.jsx)(m.R94, {
                    type: m.geA.DESCRIPTION,
                    children: er.intl.string(er.t['dbTs+/'])
                })
            ]
        });
    }
    renderJuiceImage(e) {
        let t,
            { theme: l } = this.props;
        return (
            (t = e.type === ee.d4z.GUILD_CATEGORY ? ((0, h.wj)(l) ? n(309095) : n(925442)) : (0, h.wj)(l) ? n(316491) : n(301358)),
            (0, i.jsx)(O.Z, {
                justify: O.Z.Justify.CENTER,
                className: ea.marginTop60,
                children: (0, i.jsx)('img', {
                    alt: '',
                    width: 280,
                    height: 165,
                    src: t
                })
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: n } = this.props;
        return null == e || null == t || null == n
            ? null
            : (0, i.jsxs)(m.hjN, {
                  className: 'channel-settings-overview',
                  tag: m.RB0.H1,
                  title: er.intl.string(er.t['/dp6yc']),
                  children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, i.jsx)(m.$i$, { className: s()(ea.marginTop40, ea.marginBottom40) }) : null, this.renderVoiceBitrate(e, n), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderJuiceImage(e)]
              });
    }
    handleSubmit() {
        return new Promise((e) => {
            e({
                shouldClear: !1,
                shouldRefocus: !0
            });
        });
    }
    constructor(e) {
        var t, n;
        (super(e),
            eo(this, 'defaultReactionButtonRef', l.createRef()),
            eo(this, 'nameInputRef', l.createRef()),
            eo(this, 'cursorPosition', 0),
            eo(this, 'renderEmojiPicker', (e) => {
                let { closePopout: t } = e,
                    { channel: n } = this.props;
                return (0, i.jsx)(w.Z, {
                    guildId: null == n ? void 0 : n.guild_id,
                    closePopout: t,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        (this.handleChangeDefaultReactionEmoji(n), i && t());
                    },
                    pickerIntention: en.Hz.COMMUNITY_CONTENT,
                    channel: n,
                    analyticsOverride: eN
                });
            }),
            eo(this, 'handleRequireTagChanged', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, Y.mB)(t.flags, et.zZ.REQUIRE_TAG, e);
                (0, g.pW)({ flags: n });
            }),
            eo(this, 'handleChangeName', (e) => {
                var t, n;
                let { channel: i } = this.props;
                if (null == i) return;
                i.isThread() ? (e = (0, k.Z)(e, !1)) : ee.TPd.LIMITED_CHANNEL_NAME.has(i.type) && (e = (0, z.Nj)(e));
                let l = null != (n = null == (t = this.nameInputRef.current) ? void 0 : t.selectionStart) ? n : 0;
                ((0, g.pW)({ name: e }),
                    setTimeout(() => {
                        var e;
                        null == (e = this.nameInputRef.current) || e.setSelectionRange(l, l);
                    }, 0));
            }),
            eo(this, 'handleBlurName', () => {
                let { channel: e, channelName: t } = this.props;
                if ((null == e ? void 0 : e.isThread()) && null != t) {
                    let e = (0, k.Z)(t, !0);
                    e !== t && (0, g.pW)({ name: e });
                }
            }),
            eo(this, 'insertEmojiAtPosition', (e) => {
                var t, n;
                let i = this.nameInputRef.current,
                    l = null != (t = null == i ? void 0 : i.selectionStart) ? t : 0,
                    r = null != (n = null == i ? void 0 : i.selectionEnd) ? n : 0,
                    s = this.props.channelName,
                    a = (null == s ? void 0 : s.substring(0, l)) + e + (null == s ? void 0 : s.substring(r));
                ((0, g.pW)({ name: a }),
                    setTimeout(() => {
                        let t = l + e.length;
                        (null == i || i.focus(), null == i || i.setSelectionRange(t, t));
                    }, 0));
            }),
            eo(this, 'handleChangeTopic', (e) => {
                (0, g.pW)({ topic: R.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            eo(this, 'handleChangeRichTopic', (e, t, n) => {
                (this.setState({
                    textTopicValue: t,
                    richTopicValue: n
                }),
                    this.handleChangeTopic(t));
            }),
            eo(this, 'handleChangeTemplate', (e) => {
                (0, g.pW)({ template: R.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            eo(this, 'handleChangeDefaultReactionEmoji', (e) => {
                let t =
                    null == e
                        ? null
                        : (null == e ? void 0 : e.id) != null
                          ? {
                                emojiId: e.id,
                                emojiName: void 0
                            }
                          : {
                                emojiId: void 0,
                                emojiName: e.optionallyDiverseSequence
                            };
                (0, g.pW)({ defaultReactionEmoji: t });
            }),
            eo(this, 'handleChangeDefaultForumLayout', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                ((0, g.pW)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e));
            }),
            eo(this, 'handleChangeDefaultSortOrder', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, g.pW)({ defaultSortOrder: e });
            }),
            eo(this, 'handleChangeDefaultTagSetting', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, g.pW)({ defaultTagSetting: e });
            }),
            eo(this, 'handleChangeBitrate', (e) => {
                (0, g.pW)({ bitrate: 1000 * Math.round(e / 1000) });
            }),
            eo(this, 'handleUserLimitChange', (e) => {
                (0, g.pW)({ userLimit: Math.round(e) });
            }),
            eo(this, 'handleNSFWChange', (e) => {
                (0, g.pW)({ nsfw: e });
            }),
            eo(this, 'handleActiveChannelsRemovedChange', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, Y.mB)(t.flags, et.zZ.ACTIVE_CHANNELS_REMOVED, !e);
                (0, g.pW)({ flags: n });
            }),
            eo(this, 'handleNewsChange', (e) => {
                (0, g.pW)({ type: e ? ee.d4z.GUILD_ANNOUNCEMENT : ee.d4z.GUILD_TEXT });
            }),
            eo(this, 'handleChangeSlowmode', (e) => {
                (0, g.pW)({ rateLimitPerUser: e });
            }),
            eo(this, 'handleChangeThreadMessageSlowmode', (e) => {
                (0, g.pW)({ defaultThreadRateLimitPerUser: e });
            }),
            eo(this, 'handleChangeDefaultAutoArchiveDuration', (e) => {
                (0, g.pW)({ defaultAutoArchiveDuration: e });
            }),
            eo(this, 'handleRegionChange', (e) => {
                (0, g.pW)({ rtcRegion: e === eO ? null : e });
            }),
            eo(this, 'handleVideoQualityModeChange', (e) => {
                (0, g.pW)({ videoQualityMode: e });
            }),
            eo(this, 'handleAutoArchiveDurationChanged', (e) => {
                (0, g.pW)({ autoArchiveDuration: e });
            }),
            eo(this, 'handleInvitableChanged', (e) => {
                (0, g.pW)({ invitable: e });
            }),
            eo(this, 'handleChannelSummariesToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, Y.mB)(t.flags, et.zZ.SUMMARIES_DISABLED, !e);
                (0, g.pW)({ flags: n });
            }),
            eo(this, 'handleShowMediaOptionsToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, Y.mB)(t.flags, et.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                (0, g.pW)({ flags: n });
            }));
        let r = null != (n = null == (t = this.props.channel) ? void 0 : t.topic) ? n : '';
        this.state = {
            textTopicValue: r,
            richTopicValue: (0, N.JM)(r),
            topicFocused: !1,
            updateNameInputCursorPosition: !1
        };
    }
}
function eZ() {
    let { errors: e, channel: t, submitting: n, subsection: r } = (0, d.cj)([V.Z], () => V.Z.getProps()),
        s = (0, d.e7)([G.Z], () => {
            var e;
            return G.Z.getRegions(null != (e = null == t ? void 0 : t.getGuildId()) ? e : null);
        }),
        a = (0, d.e7)([M.Z], () => M.Z.theme),
        o = (0, d.e7)([W.Z], () => W.Z.getGuild(null == t ? void 0 : t.getGuildId())),
        c = (0, L.C7)(t),
        u = (0, L.Xb)(t),
        { canManageChannels: h, canSendMessages: m } = (0, d.cj)([H.Z], () => ({
            canManageChannels: H.Z.can(ee.Plq.MANAGE_CHANNELS, t),
            canSendMessages: H.Z.can(ee.Plq.SEND_MESSAGES, t)
        })),
        g = (0, y.ZP)(t),
        p = U.default.getId(),
        f = (0, I.v)(),
        x = null == t ? void 0 : t.id,
        C = (0, b.ts)(t, !1, !0),
        N = j.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'ChannelSettingsOverview'
        }).enabled,
        S = (0, v.s)({
            guildId: null == o ? void 0 : o.id,
            location: 'ChannelSettingsOverview'
        }),
        O = l.useCallback(
            (e) => {
                null != x && f.getState().setLayoutType(x, e);
            },
            [x, f]
        );
    return (0, i.jsx)(ew, {
        errors: e,
        channel: t,
        channelName: g,
        submitting: n,
        regions: s,
        theme: a,
        guild: o,
        canManageChannels: (null == t ? void 0 : t.isThread()) ? c : h,
        canSendMessages: m,
        isThreadModerator: u,
        canManageThread: c,
        subsection: r,
        isForumPost: null != t && t.isForumPost(),
        isOwner: null == t ? void 0 : t.isOwner(p),
        handleSetDefaultLayout: O,
        showChannelSummariesSettings: C,
        showAdvancedSlowModeSetting: N,
        isEmojiInChannelNamesEnabled: S
    });
}
