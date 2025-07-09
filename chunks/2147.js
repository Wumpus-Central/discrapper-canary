(n.d(t, {
    G: () => eT,
    Z: () => eR
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
    m = n(755721),
    g = n(481060),
    p = n(787014),
    f = n(771340),
    x = n(410575),
    j = n(852860),
    b = n(129865),
    v = n(902840),
    y = n(429673),
    C = n(933557),
    N = n(541716),
    S = n(752305),
    O = n(893718),
    E = n(600164),
    T = n(313201),
    w = n(318766),
    Z = n(907040),
    R = n(906411),
    I = n(633302),
    _ = n(109434),
    P = n(162389),
    A = n(946458),
    L = n(968437),
    D = n(665906),
    M = n(456077),
    k = n(747212),
    B = n(210887),
    V = n(131704),
    U = n(314897),
    W = n(388610),
    H = n(430824),
    G = n(496675),
    F = n(903223),
    z = n(594174),
    X = n(934415),
    Y = n(70956),
    J = n(630388),
    q = n(63063),
    $ = n(129724),
    Q = n(732335),
    K = n(296146),
    ee = n(564735),
    et = n(981631),
    en = n(176505),
    ei = n(185923),
    el = n(710352),
    er = n(124368),
    es = n(388032),
    ea = n(194512),
    eo = n(20493);
function ec(e, t, n) {
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
function ed(e) {
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
                ec(e, t, n[t]);
            }));
    }
    return e;
}
function eu(e, t) {
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
let eh = (0, T.hQ)(),
    em = (0, T.hQ)(),
    eg = (0, T.hQ)(),
    ep = (0, T.hQ)(),
    ef = (0, T.hQ)(),
    ex = (0, T.hQ)(),
    ej = (0, T.hQ)(),
    eb = (0, T.hQ)(),
    ev = (0, T.hQ)(),
    ey = (0, T.hQ)(),
    eC = (0, T.hQ)(),
    eN = (0, V.kt)({
        id: '1',
        type: et.d4z.DM
    }),
    eS = {
        popoutLocation: {
            page: et.ZY5.CHANNEL_SETTINGS,
            section: et.jXE.CHANNEL_DEFAULT_REACTION,
            object: et.qAy.EMOJI_PICKER_BUTTON
        }
    },
    eO = {
        popoutLocation: {
            page: et.ZY5.CHANNEL_SETTINGS,
            section: et.jXE.CHANNEL_NAME,
            object: et.qAy.EMOJI_PICKER_BUTTON
        }
    },
    eE = 'AUTOMATIC_RTC_REGION',
    eT = d.ZP.connectStores([W.Z], () => {
        let { channel: e, submitting: t } = W.Z.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, p.S1)(e.id);
            },
            onSave() {
                if (null == e) return;
                let { name: t, type: n, topic: i, bitrate: l, userLimit: r, nsfw: s, flags: a, rateLimitPerUser: o, defaultThreadRateLimitPerUser: c, threadMetadata: d, defaultAutoArchiveDuration: u, template: h, rtcRegion: m, videoQualityMode: g, defaultReactionEmoji: f, availableTags: x, defaultSortOrder: j, defaultForumLayout: b, defaultTagSetting: v } = e;
                (e.isThread() && (t = (0, M.Z)(t, !0)),
                    (0, p.wk)(e.id, {
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
                        videoQualityMode: g,
                        defaultReactionEmoji: f,
                        availableTags: x,
                        defaultSortOrder: j,
                        defaultForumLayout: b,
                        defaultTagSetting: v
                    }));
            }
        };
    })(j.Z);
function ew(e) {
    let { onEmojiPicked: t, channel: n, guildId: r } = e,
        s = l.useRef(null),
        a = l.useCallback(
            (e) => {
                let { closePopout: l } = e;
                return (0, i.jsx)(Z.Z, {
                    channel: n,
                    guildId: r,
                    pickerIntention: ei.Hz.CHANNEL_NAME,
                    closePopout: l,
                    onNavigateAway: l,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        (null != n && n.type === R.B.UNICODE && t(n.surrogates), i && l());
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: eO
                });
            },
            [n, r, t]
        );
    return (0, i.jsx)(g.yRy, {
        targetElementRef: s,
        renderPopout: a,
        animation: g.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(
                w.Z,
                eu(ed({}, e), {
                    ref: s,
                    active: n,
                    className: ea.emojiButton,
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
class eZ extends l.PureComponent {
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && f.Z.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        var t, n, i, l;
        let r = null != (i = null == (t = this.props.channel) ? void 0 : t.topic) ? i : '';
        (null != (l = null == (n = e.channel) ? void 0 : n.topic) ? l : '') !== r &&
            r !== this.state.textTopicValue &&
            this.setState({
                textTopicValue: r,
                richTopicValue: (0, S.JM)(r)
            });
    }
    getError(e) {
        let { errors: t } = this.props;
        return null == t ? void 0 : t[e];
    }
    getCooldownSliderMarker(e) {
        return (0, $.A)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, $.A)(e * Y.Z.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        var n, l, r, d, h, p;
        let f,
            j,
            { canManageChannels: b, canSendMessages: v, isThreadModerator: y, canManageThread: C, guild: S, isForumPost: E, isOwner: T, showAdvancedSlowModeSetting: w } = this.props,
            Z = V.Ec.has(e.type),
            R = e.isForumLikeChannel(),
            _ = R && (null == (n = e.availableTags) ? void 0 : n.every((e) => e.moderated)),
            D = (null == (l = z.default.getCurrentUser()) ? void 0 : l.isStaff()) === !0,
            M = V.TK.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.xJW, {
                              title: R ? es.intl.string(es.t.yR6Hwc) : es.intl.string(es.t.X8jMDg),
                              className: eo.marginTop20,
                              children: (0, i.jsx)(O.Z, {
                                  innerClassName: ea.topic,
                                  characterCountClassName: ea.topicCharacterCount,
                                  maxCharacterCount: R ? en.Z7 : en.$x,
                                  onChange: this.handleChangeRichTopic,
                                  placeholder: es.intl.string(es.t['71fbmp']),
                                  channel: eN,
                                  textValue: this.state.textTopicValue,
                                  richValue: this.state.richTopicValue,
                                  type: R ? N.Ie.FORUM_CHANNEL_GUIDELINES : N.Ie.CHANNEL_TOPIC,
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
                                  disabled: !b
                              })
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(eo.marginTop40, eo.marginBottom40) })
                      ]
                  })
                : null,
            B =
                R && D
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(g.xJW, {
                                  title: es.intl.string(es.t.qk2jdX),
                                  className: eo.marginTop20,
                                  children: (0, i.jsx)(g.Kx8, {
                                      placeholder: es.intl.string(es.t.DDjD1N),
                                      value: I.ZP.translateSurrogatesToInlineEmoji(null != (r = e.template) ? r : ''),
                                      onChange: this.handleChangeTemplate,
                                      error: this.getError('template'),
                                      maxLength: el.Vb,
                                      disabled: !b,
                                      autosize: !0
                                  })
                              }),
                              (0, i.jsx)(g.$i$, { className: s()(eo.marginTop40, eo.marginBottom40) })
                          ]
                      })
                    : null,
            U = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(g.xJW, {
                              children: [
                                  (0, i.jsx)(g.vwX, {
                                      error: this.getError('available_tags'),
                                      id: eh,
                                      className: ea.formTitle,
                                      children: es.intl.string(es.t['P/y+sr'])
                                  }),
                                  (0, i.jsx)(g.R94, {
                                      id: em,
                                      type: g.R94.Types.DESCRIPTION,
                                      className: ea.description,
                                      children: es.intl.string(es.t['/oQQ39'])
                                  }),
                                  (0, i.jsx)(P.Z, { channel: e })
                              ]
                          }),
                          (0, i.jsx)(g.XZJ, {
                              disabled: !b || _,
                              value: e.hasFlag(en.zZ.REQUIRE_TAG),
                              type: g.XZJ.Types.INVERTED,
                              onChange: (e, t) => this.handleRequireTagChanged(t),
                              children: (0, i.jsx)(g.Text, {
                                  variant: 'text-sm/normal',
                                  children: es.intl.string(es.t['9g2Zys'])
                              })
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(eo.marginTop40, eo.marginBottom40) })
                      ]
                  })
                : null,
            W = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: ea.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(g.xJW, {
                                      className: s()(ea.settingsLeft, ea.settingsDefaultReaction),
                                      children: [
                                          (0, i.jsx)(g.vwX, {
                                              id: eg,
                                              className: ea.formTitle,
                                              children: es.intl.string(es.t['8ao1+P'])
                                          }),
                                          (0, i.jsx)(g.R94, {
                                              id: em,
                                              type: g.R94.Types.DESCRIPTION,
                                              className: ea.description,
                                              children: es.intl.string(es.t.SdbF0t)
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: ea.buttonRow,
                                              children: [
                                                  (0, i.jsx)(g.yRy, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: 'right',
                                                      animation: g.yRy.Animation.NONE,
                                                      align: 'center',
                                                      children: (e) =>
                                                          (0, i.jsx)(
                                                              m.zx,
                                                              eu(ed({}, e), {
                                                                  buttonRef: this.defaultReactionButtonRef,
                                                                  disabled: !b,
                                                                  onClick: (t) => {
                                                                      var n;
                                                                      null == (n = e.onClick) || n.call(e, t);
                                                                  },
                                                                  children: es.intl.string(es.t['59QgaG'])
                                                              })
                                                          )
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, i.jsx)(m.zx, {
                                                            className: ea.removeButton,
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            size: m.zx.Sizes.MIN,
                                                            look: m.zx.Looks.LINK,
                                                            color: m.zx.Colors.RED,
                                                            children: es.intl.string(es.t.N86XcH)
                                                        })
                                                      : null
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(A.Z, { reactionEmoji: e.defaultReactionEmoji })
                              ]
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(eo.marginTop40, eo.marginBottom40) })
                      ]
                  })
                : null,
            H = e.isForumChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: ea.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(g.xJW, {
                                      className: s()(ea.settingsLeft, ea.settingsDefaultView),
                                      children: [
                                          (0, i.jsx)(g.hjN, {
                                              title: es.intl.string(es.t.kQvoCw),
                                              children: (0, i.jsx)(g.q4e, {
                                                  options: [
                                                      {
                                                          label: es.intl.string(es.t['4HXEZG']),
                                                          value: a.X.LIST
                                                      },
                                                      {
                                                          label: es.intl.string(es.t['8RswJC']),
                                                          value: a.X.GRID
                                                      }
                                                  ],
                                                  value: null != (d = e.defaultForumLayout) ? d : a.X.LIST,
                                                  onChange: this.handleChangeDefaultForumLayout
                                              })
                                          }),
                                          (0, i.jsx)(g.R94, {
                                              className: eo.marginTop8,
                                              type: g.R94.Types.DESCRIPTION,
                                              children: es.intl.string(es.t.mOSViY)
                                          })
                                      ]
                                  }),
                                  e.defaultForumLayout === a.X.GRID ? (0, i.jsx)(K.Z, { className: ea.defaultImageView }) : (0, i.jsx)(ee.Z, { className: ea.defaultImageView })
                              ]
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(eo.marginTop40, eo.marginBottom40) })
                      ]
                  })
                : null,
            G = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.xJW, {
                              children: (0, i.jsx)(g.hjN, {
                                  title: es.intl.string(es.t.gePre3),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: es.intl.string(es.t.ElZtzs),
                                              value: c.z.LATEST_ACTIVITY
                                          },
                                          {
                                              label: es.intl.string(es.t.w28f3N),
                                              value: c.z.CREATION_DATE
                                          }
                                      ],
                                      value: e.getDefaultSortOrder(),
                                      onChange: this.handleChangeDefaultSortOrder
                                  })
                              })
                          }),
                          (0, i.jsx)(g.R94, {
                              className: eo.marginTop8,
                              type: g.R94.Types.DESCRIPTION,
                              children: es.intl.string(es.t['165cVV'])
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(eo.marginTop40, eo.marginBottom40) })
                      ]
                  })
                : null,
            F = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.xJW, {
                              children: (0, i.jsx)(g.hjN, {
                                  title: es.intl.string(es.t.Paxaur),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: es.intl.string(es.t.rQ0ctb),
                                              value: o.z.MATCH_SOME
                                          },
                                          {
                                              label: es.intl.string(es.t.FCXUu7),
                                              value: o.z.MATCH_ALL
                                          }
                                      ],
                                      value: e.getDefaultTagSetting(),
                                      onChange: this.handleChangeDefaultTagSetting
                                  })
                              })
                          }),
                          (0, i.jsx)(g.R94, {
                              className: eo.marginTop8,
                              type: g.R94.Types.DESCRIPTION,
                              children: es.intl.string(es.t.DqOl8P)
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(eo.marginTop40, eo.marginBottom40) })
                      ]
                  })
                : null,
            X = Z ? y : b,
            Y = V.X_.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(g.xJW, {
                              children: [
                                  (0, i.jsx)(g.vwX, {
                                      id: ep,
                                      className: eo.marginBottom8,
                                      children: es.intl.string(es.t['tTHx9/'])
                                  }),
                                  R
                                      ? (0, i.jsx)(g.vwX, {
                                            className: eo.marginTop20,
                                            children: es.intl.string(es.t.O1c02t)
                                        })
                                      : null,
                                  !0 === w
                                      ? (0, i.jsx)(Q.Z, {
                                            channel: e,
                                            onChange: this.handleChangeSlowmode
                                        })
                                      : (0, i.jsx)(g.iRW, {
                                            className: eo.marginTop20,
                                            initialValue: e.rateLimitPerUser,
                                            markers: et.BiE,
                                            stickToMarkers: !0,
                                            onValueChange: this.handleChangeSlowmode,
                                            onMarkerRender: this.getCooldownSliderMarker,
                                            disabled: !X,
                                            equidistant: !0,
                                            'aria-labelledby': ep,
                                            'aria-describedby': ef
                                        }),
                                  (0, i.jsx)(g.R94, {
                                      id: ef,
                                      type: g.R94.Types.DESCRIPTION,
                                      children: R ? es.intl.string(es.t['a+1pdH']) : Z ? es.intl.string(es.t.OMmNCg) : es.intl.string(es.t['HEA/DQ'])
                                  }),
                                  R
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(g.vwX, {
                                                    className: eo.marginTop20,
                                                    children: es.intl.string(es.t['fkY5+v'])
                                                }),
                                                (0, i.jsx)(g.iRW, {
                                                    className: eo.marginTop20,
                                                    initialValue: null != (h = e.defaultThreadRateLimitPerUser) ? h : 0,
                                                    markers: et.BiE,
                                                    stickToMarkers: !0,
                                                    onValueChange: this.handleChangeThreadMessageSlowmode,
                                                    onMarkerRender: this.getCooldownSliderMarker,
                                                    disabled: !X,
                                                    equidistant: !0,
                                                    'aria-labelledby': ep,
                                                    'aria-describedby': ef
                                                }),
                                                (0, i.jsx)(g.R94, {
                                                    type: g.R94.Types.DESCRIPTION,
                                                    children: es.intl.string(es.t.kdZU6O)
                                                })
                                            ]
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(eo.marginTop40, eo.marginBottom40) })
                      ]
                  })
                : null,
            J =
                Z && null != e.threadMetadata
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(g.xJW, {
                                  children: (0, i.jsx)(x.Z, {
                                      page: et.ZY5.CHANNEL_SETTINGS,
                                      children: (0, i.jsx)(k.Z, {
                                          isDisabled: !C,
                                          autoArchiveDuration: null != (p = e.threadMetadata.autoArchiveDuration) ? p : er.AX,
                                          onChange: this.handleAutoArchiveDurationChanged
                                      })
                                  })
                              }),
                              (0, i.jsx)(g.R94, {
                                  className: eo.marginTop8,
                                  type: g.R94.Types.DESCRIPTION,
                                  children: E ? es.intl.string(es.t['3aJN9P']) : es.intl.string(es.t.YUXr4e)
                              })
                          ]
                      })
                    : null,
            $ =
                e.type === et.d4z.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(g.j7V, {
                              note: es.intl.string(es.t.cSyXJi),
                              onChange: this.handleInvitableChanged,
                              value: e.threadMetadata.invitable,
                              hideBorder: !0,
                              disabled: !C,
                              children: es.intl.string(es.t.s2rpNT)
                          })
                      })
                    : null,
            ei = V.ov.has(e.type)
                ? (0, i.jsx)('div', {
                      children: (0, i.jsx)(g.j7V, {
                          note: es.intl.string(es.t['9eUgwc']),
                          onChange: this.handleNSFWChange,
                          value: e.isNSFW(),
                          hideBorder: !0,
                          disabled: !b || null != e.linkedLobby,
                          disabledText: null != e.linkedLobby ? es.intl.string(es.t.l6uSVV) : null,
                          children: es.intl.string(es.t.Es25YW)
                      })
                  })
                : null,
            ec =
                V.Y0.has(e.type) && null != S && S.features.has(et.oNc.NEWS) && e.id !== (null == S ? void 0 : S.rulesChannelId) && e.id !== (null == S ? void 0 : S.publicUpdatesChannelId)
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(g.j7V, {
                              note: (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('div', { children: es.intl.format(es.t.tI7KNT, { documentationLink: q.Z.getArticleURL(et.BhN.ANNOUNCEMENT_CHANNELS) }) }),
                                      (0, i.jsx)('div', {
                                          className: eo.marginTop8,
                                          children: es.intl.string(es.t['2Ab4IS'])
                                      })
                                  ]
                              }),
                              onChange: this.handleNewsChange,
                              value: e.type === et.d4z.GUILD_ANNOUNCEMENT,
                              hideBorder: !0,
                              disabled: !b,
                              children: es.intl.string(es.t.Au2b7u)
                          })
                      })
                    : null,
            ex = V.uC.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.$i$, { className: s()(eo.marginTop40, eo.marginBottom40) }),
                          (0, i.jsx)(x.Z, {
                              page: et.ZY5.CHANNEL_SETTINGS,
                              children: (0, i.jsx)(k.Z, {
                                  isDisabled: !b,
                                  autoArchiveDuration: (0, L.WD)(e, null),
                                  onChange: this.handleChangeDefaultAutoArchiveDuration
                              })
                          }),
                          (0, i.jsx)(g.R94, {
                              className: eo.marginTop8,
                              type: g.R94.Types.DESCRIPTION,
                              children: e.isForumLikeChannel() ? es.intl.string(es.t.fyXclZ) : es.intl.string(es.t.W3Noi4)
                          })
                      ]
                  })
                : null,
            ej = this.props.showChannelSummariesSettings
                ? (0, i.jsx)(g.j7V, {
                      note: es.intl.format(es.t.feJW19, { helpdeskArticle: q.Z.getArticleURL(et.BhN.CONVERSATION_SUMMARIES) }),
                      onChange: this.handleChannelSummariesToggled,
                      value: !e.hasFlag(en.zZ.SUMMARIES_DISABLED) && (null == S ? void 0 : S.features.has(et.oNc.SUMMARIES_ENABLED_BY_USER)),
                      hideBorder: !0,
                      disabled: !b || !(null == S ? void 0 : S.features.has(et.oNc.SUMMARIES_ENABLED_BY_USER)),
                      children: (0, i.jsxs)('div', {
                          className: ea.badgedItem,
                          children: [
                              es.intl.string(es.t.id3ozs),
                              (0, i.jsx)(g.IGR, {
                                  text: es.intl.string(es.t.oW0eUV),
                                  color: u.Z.colors.BG_BRAND.css
                              })
                          ]
                      })
                  })
                : null,
            eb = e.isMediaChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.$i$, { className: s()(eo.marginTop40, eo.marginBottom40) }),
                          (0, i.jsx)(g.j7V, {
                              onChange: this.handleShowMediaOptionsToggled,
                              value: !e.hasFlag(en.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                              note: es.intl.string(es.t.J4wCc3),
                              hideBorder: !0,
                              disabled: !b,
                              children: es.intl.string(es.t.u8LZOj)
                          })
                      ]
                  })
                : null;
        return (
            e.type === et.d4z.GUILD_CATEGORY ? ((j = es.intl.string(es.t.OCAkGB)), (f = 'category-name')) : e.isForumPost() ? ((j = es.intl.string(es.t.uyVrTE)), (f = 'post-title')) : Z ? ((j = es.intl.string(es.t.j3XWjI)), (f = 'thread-name')) : ((j = es.intl.string(es.t.PVbHDg)), (f = 'channel-name')),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(g.xJW, {
                        title: j,
                        children: this.props.isEmojiInChannelNamesEnabled
                            ? (0, i.jsxs)('div', {
                                  className: ea.nameInput,
                                  children: [
                                      (0, i.jsx)(g.oil, {
                                          inputRef: this.nameInputRef,
                                          value: t,
                                          onChange: this.handleChangeName,
                                          onBlur: this.handleBlurName,
                                          error: this.getError('name'),
                                          name: f,
                                          autoFocus: !0,
                                          disabled: T ? !v : !b,
                                          maxLength: et.HN8,
                                          className: ea.nameInputWrapperWithEmojiPicker,
                                          inputClassName: ea.nameInputInnerWithEmojiPicker,
                                          focusProps: { offset: { right: -30 } }
                                      }),
                                      (0, i.jsx)(ew, {
                                          onEmojiPicked: this.insertEmojiAtPosition,
                                          channel: e,
                                          guildId: null == e ? void 0 : e.guild_id
                                      })
                                  ]
                              })
                            : (0, i.jsx)(g.oil, {
                                  inputRef: this.nameInputRef,
                                  value: t,
                                  onChange: this.handleChangeName,
                                  onBlur: this.handleBlurName,
                                  error: this.getError('name'),
                                  name: f,
                                  autoFocus: !0,
                                  disabled: T ? !v : !b,
                                  maxLength: et.HN8
                              })
                    }),
                    (0, i.jsx)(g.$i$, { className: s()(eo.marginTop40, eo.marginBottom40) }),
                    M,
                    B,
                    U,
                    W,
                    Y,
                    J,
                    H,
                    G,
                    F,
                    $,
                    ei,
                    ec,
                    ej,
                    ex,
                    eb
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
        let l = (0, X.g7)(t, e),
            r = this.getError('bitrate');
        return (0, i.jsxs)(E.Z, {
            direction: E.Z.Direction.VERTICAL,
            className: eo.marginBottom40,
            children: [
                (0, i.jsx)(g.vwX, {
                    id: ex,
                    children: es.intl.string(es.t.w2d0vb)
                }),
                '' !== r &&
                    (0, i.jsx)(g.R94, {
                        id: ej,
                        type: g.geA.DESCRIPTION,
                        style: { color: u.Z.unsafe_rawColors.RED_400.css },
                        className: eo.marginBottom8,
                        children: r
                    }),
                (0, i.jsx)(g.iRW, {
                    initialValue: Math.min(e.bitrate, l),
                    onValueChange: this.handleChangeBitrate,
                    onValueRender: this.renderBitrate,
                    onMarkerRender: this.renderBitrate,
                    markers: [et.Fc, et.epw, l],
                    minValue: et.Fc,
                    maxValue: l,
                    keyboardStep: et.V7H,
                    disabled: !n,
                    'aria-labelledby': ex,
                    'aria-describedby': null != r && '' !== r ? ej : eb
                }),
                l > et.epw
                    ? (0, i.jsx)(g.R94, {
                          id: eb,
                          type: g.geA.DESCRIPTION,
                          children: es.intl.format(es.t.SbQJk5, { bitrate: et.epw / 1000 })
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
            V.vg.has(e.type) &&
            (e.isGuildVocal() ||
                D.tM.getCurrentConfig({
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
                value: et.Ucd.AUTO,
                name: es.intl.string(es.t.jjKYpq)
            },
            {
                value: et.Ucd.FULL,
                name: es.intl.string(es.t['7jOoJC'])
            }
        ];
        return (0, i.jsxs)(E.Z, {
            direction: E.Z.Direction.VERTICAL,
            className: eo.marginBottom40,
            children: [
                (0, i.jsx)(g.xJW, {
                    title: es.intl.string(es.t.jhJEJi),
                    children: (0, i.jsx)(g.FXm, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return this.handleVideoQualityModeChange(t);
                        },
                        options: l,
                        value: null != (t = e.videoQualityMode) ? t : et.Ucd.AUTO,
                        disabled: !n
                    })
                }),
                (0, i.jsx)(g.R94, {
                    type: g.geA.DESCRIPTION,
                    children: es.intl.format(es.t.c5W7Sk, {})
                })
            ]
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e)) ? es.intl.string(es.t.XX5ciY) : es.intl.formatToPlainString(es.t['3uHFUV'], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError('user_limit'),
            l = e.isGuildStageVoice() ? et.xGv : et.$pe;
        return (0, i.jsxs)(E.Z, {
            direction: E.Z.Direction.VERTICAL,
            className: eo.marginBottom40,
            children: [
                (0, i.jsx)(g.vwX, {
                    id: ev,
                    children: es.intl.string(es.t['/AoSGB'])
                }),
                '' !== n &&
                    (0, i.jsx)(g.R94, {
                        id: ey,
                        type: g.geA.DESCRIPTION,
                        style: { color: u.Z.unsafe_rawColors.RED_400.css },
                        className: eo.marginBottom8,
                        children: n
                    }),
                (0, i.jsx)(g.iRW, {
                    initialValue: Math.min(e.userLimit, l),
                    onValueChange: this.handleUserLimitChange,
                    onValueRender: this.onRenderUserLimit,
                    onMarkerRender: (e) => (0 === Math.round(e) ? '\u221E' : e),
                    markers: [0, l],
                    minValue: 0,
                    maxValue: l,
                    disabled: !t,
                    'aria-labelledby': ev,
                    'aria-describedby': null != n && '' !== n ? ey : eC
                }),
                (0, i.jsx)(g.R94, {
                    id: eC,
                    type: g.geA.DESCRIPTION,
                    children: es.intl.format(e.isGuildStageVoice() ? es.t.OqZI8P : es.t['8yb3JS'], {})
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
                label: es.intl.string(es.t.JEmsam),
                value: eE
            });
        let a = null != (t = e.rtcRegion) ? t : eE;
        return (0, i.jsxs)(E.Z, {
            direction: E.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)(g.vwX, { children: es.intl.string(es.t.Ms8bX1) }),
                (0, i.jsx)(g.q4e, {
                    options: s,
                    value: a,
                    onChange: this.handleRegionChange,
                    isDisabled: !l
                }),
                (0, i.jsx)(g.R94, {
                    type: g.geA.DESCRIPTION,
                    children: es.intl.string(es.t['dbTs+/'])
                })
            ]
        });
    }
    renderJuiceImage(e) {
        let t,
            { theme: l } = this.props;
        return (
            (t = e.type === et.d4z.GUILD_CATEGORY ? ((0, h.wj)(l) ? n(309095) : n(925442)) : (0, h.wj)(l) ? n(316491) : n(301358)),
            (0, i.jsx)(E.Z, {
                justify: E.Z.Justify.CENTER,
                className: eo.marginTop60,
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
            : (0, i.jsxs)(g.hjN, {
                  className: 'channel-settings-overview',
                  tag: g.RB0.H1,
                  title: es.intl.string(es.t['/dp6yc']),
                  children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, i.jsx)(g.$i$, { className: s()(eo.marginTop40, eo.marginBottom40) }) : null, this.renderVoiceBitrate(e, n), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderJuiceImage(e)]
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
            ec(this, 'defaultReactionButtonRef', l.createRef()),
            ec(this, 'nameInputRef', l.createRef()),
            ec(this, 'cursorPosition', 0),
            ec(this, 'renderEmojiPicker', (e) => {
                let { closePopout: t } = e,
                    { channel: n } = this.props;
                return (0, i.jsx)(Z.Z, {
                    guildId: null == n ? void 0 : n.guild_id,
                    closePopout: t,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        (this.handleChangeDefaultReactionEmoji(n), i && t());
                    },
                    pickerIntention: ei.Hz.COMMUNITY_CONTENT,
                    channel: n,
                    analyticsOverride: eS
                });
            }),
            ec(this, 'handleRequireTagChanged', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, J.mB)(t.flags, en.zZ.REQUIRE_TAG, e);
                (0, p.pW)({ flags: n });
            }),
            ec(this, 'handleChangeName', (e) => {
                var t, n;
                let { channel: i } = this.props;
                if (null == i) return;
                i.isThread() ? (e = (0, M.Z)(e, !1)) : et.TPd.LIMITED_CHANNEL_NAME.has(i.type) && (e = (0, X.Nj)(e));
                let l = null != (n = null == (t = this.nameInputRef.current) ? void 0 : t.selectionStart) ? n : 0;
                ((0, p.pW)({ name: e }),
                    setTimeout(() => {
                        var e;
                        null == (e = this.nameInputRef.current) || e.setSelectionRange(l, l);
                    }, 0));
            }),
            ec(this, 'handleBlurName', () => {
                let { channel: e, channelName: t } = this.props;
                if ((null == e ? void 0 : e.isThread()) && null != t) {
                    let e = (0, M.Z)(t, !0);
                    e !== t && (0, p.pW)({ name: e });
                }
            }),
            ec(this, 'insertEmojiAtPosition', (e) => {
                var t, n;
                let i = this.nameInputRef.current,
                    l = null != (t = null == i ? void 0 : i.selectionStart) ? t : 0,
                    r = null != (n = null == i ? void 0 : i.selectionEnd) ? n : 0,
                    s = this.props.channelName,
                    a = (null == s ? void 0 : s.substring(0, l)) + e + (null == s ? void 0 : s.substring(r));
                ((0, p.pW)({ name: a }),
                    setTimeout(() => {
                        let t = l + e.length;
                        (null == i || i.focus(), null == i || i.setSelectionRange(t, t));
                    }, 0));
            }),
            ec(this, 'handleChangeTopic', (e) => {
                (0, p.pW)({ topic: I.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            ec(this, 'handleChangeRichTopic', (e, t, n) => {
                (this.setState({
                    textTopicValue: t,
                    richTopicValue: n
                }),
                    this.handleChangeTopic(t));
            }),
            ec(this, 'handleChangeTemplate', (e) => {
                (0, p.pW)({ template: I.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            ec(this, 'handleChangeDefaultReactionEmoji', (e) => {
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
                (0, p.pW)({ defaultReactionEmoji: t });
            }),
            ec(this, 'handleChangeDefaultForumLayout', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                ((0, p.pW)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e));
            }),
            ec(this, 'handleChangeDefaultSortOrder', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, p.pW)({ defaultSortOrder: e });
            }),
            ec(this, 'handleChangeDefaultTagSetting', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, p.pW)({ defaultTagSetting: e });
            }),
            ec(this, 'handleChangeBitrate', (e) => {
                (0, p.pW)({ bitrate: 1000 * Math.round(e / 1000) });
            }),
            ec(this, 'handleUserLimitChange', (e) => {
                (0, p.pW)({ userLimit: Math.round(e) });
            }),
            ec(this, 'handleNSFWChange', (e) => {
                (0, p.pW)({ nsfw: e });
            }),
            ec(this, 'handleActiveChannelsRemovedChange', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, J.mB)(t.flags, en.zZ.ACTIVE_CHANNELS_REMOVED, !e);
                (0, p.pW)({ flags: n });
            }),
            ec(this, 'handleNewsChange', (e) => {
                (0, p.pW)({ type: e ? et.d4z.GUILD_ANNOUNCEMENT : et.d4z.GUILD_TEXT });
            }),
            ec(this, 'handleChangeSlowmode', (e) => {
                (0, p.pW)({ rateLimitPerUser: e });
            }),
            ec(this, 'handleChangeThreadMessageSlowmode', (e) => {
                (0, p.pW)({ defaultThreadRateLimitPerUser: e });
            }),
            ec(this, 'handleChangeDefaultAutoArchiveDuration', (e) => {
                (0, p.pW)({ defaultAutoArchiveDuration: e });
            }),
            ec(this, 'handleRegionChange', (e) => {
                (0, p.pW)({ rtcRegion: e === eE ? null : e });
            }),
            ec(this, 'handleVideoQualityModeChange', (e) => {
                (0, p.pW)({ videoQualityMode: e });
            }),
            ec(this, 'handleAutoArchiveDurationChanged', (e) => {
                (0, p.pW)({ autoArchiveDuration: e });
            }),
            ec(this, 'handleInvitableChanged', (e) => {
                (0, p.pW)({ invitable: e });
            }),
            ec(this, 'handleChannelSummariesToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, J.mB)(t.flags, en.zZ.SUMMARIES_DISABLED, !e);
                (0, p.pW)({ flags: n });
            }),
            ec(this, 'handleShowMediaOptionsToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, J.mB)(t.flags, en.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                (0, p.pW)({ flags: n });
            }));
        let r = null != (n = null == (t = this.props.channel) ? void 0 : t.topic) ? n : '';
        this.state = {
            textTopicValue: r,
            richTopicValue: (0, S.JM)(r),
            topicFocused: !1,
            updateNameInputCursorPosition: !1
        };
    }
}
function eR() {
    let { errors: e, channel: t, submitting: n, subsection: r } = (0, d.cj)([W.Z], () => W.Z.getProps()),
        s = (0, d.e7)([F.Z], () => {
            var e;
            return F.Z.getRegions(null != (e = null == t ? void 0 : t.getGuildId()) ? e : null);
        }),
        a = (0, d.e7)([B.Z], () => B.Z.theme),
        o = (0, d.e7)([H.Z], () => H.Z.getGuild(null == t ? void 0 : t.getGuildId())),
        c = (0, D.C7)(t),
        u = (0, D.Xb)(t),
        { canManageChannels: h, canSendMessages: m } = (0, d.cj)([G.Z], () => ({
            canManageChannels: G.Z.can(et.Plq.MANAGE_CHANNELS, t),
            canSendMessages: G.Z.can(et.Plq.SEND_MESSAGES, t)
        })),
        g = (0, C.ZP)(t),
        p = U.default.getId(),
        f = (0, _.v)(),
        x = null == t ? void 0 : t.id,
        j = (0, v.ts)(t, !1, !0),
        N = b.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'ChannelSettingsOverview'
        }).enabled,
        S = (0, y.s)({
            guildId: null == o ? void 0 : o.id,
            location: 'ChannelSettingsOverview'
        }),
        O = l.useCallback(
            (e) => {
                null != x && f.getState().setLayoutType(x, e);
            },
            [x, f]
        );
    return (0, i.jsx)(eZ, {
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
        showChannelSummariesSettings: j,
        showAdvancedSlowModeSetting: N,
        isEmojiInChannelNamesEnabled: S
    });
}
