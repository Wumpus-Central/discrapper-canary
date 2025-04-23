n.d(t, {
    G: () => eb,
    Z: () => ey
}),
    n(997841),
    n(953529),
    n(290780);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(313361),
    o = n(697988),
    c = n(683860),
    d = n(442837),
    u = n(692547),
    h = n(780384),
    g = n(481060),
    m = n(787014),
    p = n(771340),
    f = n(410575),
    x = n(852860),
    j = n(129865),
    b = n(902840),
    v = n(933557),
    y = n(541716),
    C = n(752305),
    N = n(893718),
    S = n(600164),
    O = n(313201),
    Z = n(907040),
    w = n(633302),
    T = n(109434),
    E = n(162389),
    R = n(946458),
    _ = n(968437),
    I = n(665906),
    P = n(456077),
    D = n(747212),
    L = n(210887),
    A = n(131704),
    M = n(314897),
    k = n(388610),
    B = n(430824),
    V = n(496675),
    G = n(903223),
    U = n(594174),
    W = n(934415),
    H = n(70956),
    z = n(630388),
    F = n(63063),
    X = n(129724),
    J = n(732335),
    q = n(296146),
    $ = n(564735),
    Q = n(981631),
    Y = n(176505),
    K = n(185923),
    ee = n(710352),
    et = n(124368),
    en = n(388032),
    ei = n(194512),
    el = n(20493);
function er(e, t, n) {
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
let es = (0, O.hQ)(),
    ea = (0, O.hQ)(),
    eo = (0, O.hQ)(),
    ec = (0, O.hQ)(),
    ed = (0, O.hQ)(),
    eu = (0, O.hQ)(),
    eh = (0, O.hQ)(),
    eg = (0, O.hQ)(),
    em = (0, O.hQ)(),
    ep = (0, O.hQ)(),
    ef = (0, O.hQ)(),
    ex = (0, A.kt)({
        id: '1',
        type: Q.d4z.DM
    }),
    ej = 'AUTOMATIC_RTC_REGION',
    eb = d.ZP.connectStores([k.Z], () => {
        let { channel: e, submitting: t } = k.Z.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, m.S1)(e.id);
            },
            onSave() {
                if (null == e) return;
                let { name: t, type: n, topic: i, bitrate: l, userLimit: r, nsfw: s, flags: a, rateLimitPerUser: o, defaultThreadRateLimitPerUser: c, threadMetadata: d, defaultAutoArchiveDuration: u, template: h, rtcRegion: g, videoQualityMode: p, defaultReactionEmoji: f, availableTags: x, defaultSortOrder: j, defaultForumLayout: b, defaultTagSetting: v } = e;
                e.isThread() && (t = (0, P.Z)(t, !0)),
                    (0, m.wk)(e.id, {
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
                        rtcRegion: g,
                        videoQualityMode: p,
                        defaultReactionEmoji: f,
                        availableTags: x,
                        defaultSortOrder: j,
                        defaultForumLayout: b,
                        defaultTagSetting: v
                    });
            }
        };
    })(x.Z);
class ev extends l.PureComponent {
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
                richTopicValue: (0, C.JM)(r)
            });
    }
    getError(e) {
        let { errors: t } = this.props;
        return null == t ? void 0 : t[e];
    }
    getCooldownSliderMarker(e) {
        return (0, X.A)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, X.A)(e * H.Z.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        var n, l, r, d, h, m;
        let p,
            x,
            { canManageChannels: j, canSendMessages: b, isThreadModerator: v, canManageThread: C, guild: S, isForumPost: O, isOwner: Z, showAdvancedSlowModeSetting: T } = this.props,
            I = A.Ec.has(e.type),
            P = e.isForumLikeChannel(),
            L = P && (null == (n = e.availableTags) ? void 0 : n.every((e) => e.moderated)),
            M = (null == (l = U.default.getCurrentUser()) ? void 0 : l.isStaff()) === !0,
            k = A.TK.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.xJW, {
                              title: P ? en.intl.string(en.t.yR6Hwc) : en.intl.string(en.t.X8jMDg),
                              className: el.marginTop20,
                              children: P
                                  ? (0, i.jsx)(N.Z, {
                                        innerClassName: ei.forumGuidelines,
                                        characterCountClassName: ei.forumGuidelinesCharacterCount,
                                        maxCharacterCount: Y.Z7,
                                        onChange: this.handleChangeRichTopic,
                                        placeholder: en.intl.string(en.t['71fbmp']),
                                        channel: ex,
                                        textValue: this.state.textTopicValue,
                                        richValue: this.state.richTopicValue,
                                        type: y.Ie.FORUM_CHANNEL_GUIDELINES,
                                        onBlur: () => {
                                            this.setState({ topicFocused: !1 });
                                        },
                                        onFocus: () => {
                                            this.setState({ topicFocused: !0 });
                                        },
                                        focused: this.state.topicFocused,
                                        onSubmit: this.handleSubmit,
                                        disableThemedBackground: !0
                                    })
                                  : (0, i.jsx)(g.Kx8, {
                                        autoFocus: this.props.subsection === Q.ZfP.TOPIC,
                                        placeholder: en.intl.string(en.t['71fbmp']),
                                        value: w.ZP.translateSurrogatesToInlineEmoji(e.topic),
                                        onChange: this.handleChangeTopic,
                                        error: this.getError('topic'),
                                        maxLength: Y.$x,
                                        disabled: !j,
                                        autosize: !0
                                    })
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                      ]
                  })
                : null,
            B =
                P && M
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(g.xJW, {
                                  title: en.intl.string(en.t.qk2jdX),
                                  className: el.marginTop20,
                                  children: (0, i.jsx)(g.Kx8, {
                                      placeholder: en.intl.string(en.t.DDjD1N),
                                      value: w.ZP.translateSurrogatesToInlineEmoji(null != (r = e.template) ? r : ''),
                                      onChange: this.handleChangeTemplate,
                                      error: this.getError('template'),
                                      maxLength: ee.Vb,
                                      disabled: !j,
                                      autosize: !0
                                  })
                              }),
                              (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                          ]
                      })
                    : null,
            V = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(g.xJW, {
                              children: [
                                  (0, i.jsx)(g.vwX, {
                                      error: this.getError('available_tags'),
                                      id: es,
                                      className: ei.formTitle,
                                      children: en.intl.string(en.t['P/y+sr'])
                                  }),
                                  (0, i.jsx)(g.R94, {
                                      id: ea,
                                      type: g.R94.Types.DESCRIPTION,
                                      className: ei.description,
                                      children: en.intl.string(en.t['/oQQ39'])
                                  }),
                                  (0, i.jsx)(E.Z, { channel: e })
                              ]
                          }),
                          (0, i.jsx)(g.XZJ, {
                              disabled: !j || L,
                              value: e.hasFlag(Y.zZ.REQUIRE_TAG),
                              type: g.XZJ.Types.INVERTED,
                              onChange: (e, t) => this.handleRequireTagChanged(t),
                              children: (0, i.jsx)(g.Text, {
                                  variant: 'text-sm/normal',
                                  children: en.intl.string(en.t['9g2Zys'])
                              })
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                      ]
                  })
                : null,
            G = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: ei.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(g.xJW, {
                                      className: s()(ei.settingsLeft, ei.settingsDefaultReaction),
                                      children: [
                                          (0, i.jsx)(g.vwX, {
                                              id: eo,
                                              className: ei.formTitle,
                                              children: en.intl.string(en.t['8ao1+P'])
                                          }),
                                          (0, i.jsx)(g.R94, {
                                              id: ea,
                                              type: g.R94.Types.DESCRIPTION,
                                              className: ei.description,
                                              children: en.intl.string(en.t.SdbF0t)
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: ei.buttonRow,
                                              children: [
                                                  (0, i.jsx)(g.yRy, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: 'right',
                                                      animation: g.yRy.Animation.NONE,
                                                      align: 'center',
                                                      children: (e) => {
                                                          var t, n;
                                                          return (0, i.jsx)(
                                                              g.zxk,
                                                              ((t = (function (e) {
                                                                  for (var t = 1; t < arguments.length; t++) {
                                                                      var n = null != arguments[t] ? arguments[t] : {},
                                                                          i = Object.keys(n);
                                                                      'function' == typeof Object.getOwnPropertySymbols &&
                                                                          (i = i.concat(
                                                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                              })
                                                                          )),
                                                                          i.forEach(function (t) {
                                                                              er(e, t, n[t]);
                                                                          });
                                                                  }
                                                                  return e;
                                                              })({}, e)),
                                                              (n = n =
                                                                  {
                                                                      buttonRef: this.defaultReactionButtonRef,
                                                                      disabled: !j,
                                                                      onClick: (t) => {
                                                                          var n;
                                                                          null == (n = e.onClick) || n.call(e, t);
                                                                      },
                                                                      children: en.intl.string(en.t['59QgaG'])
                                                                  }),
                                                              Object.getOwnPropertyDescriptors
                                                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                                  : (function (e, t) {
                                                                        var n = Object.keys(e);
                                                                        if (Object.getOwnPropertySymbols) {
                                                                            var i = Object.getOwnPropertySymbols(e);
                                                                            n.push.apply(n, i);
                                                                        }
                                                                        return n;
                                                                    })(Object(n)).forEach(function (e) {
                                                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                                    }),
                                                              t)
                                                          );
                                                      }
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, i.jsx)(g.zxk, {
                                                            className: ei.removeButton,
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            size: g.zxk.Sizes.MIN,
                                                            look: g.zxk.Looks.LINK,
                                                            color: g.zxk.Colors.RED,
                                                            children: en.intl.string(en.t.N86XcH)
                                                        })
                                                      : null
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(R.Z, { reactionEmoji: e.defaultReactionEmoji })
                              ]
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                      ]
                  })
                : null,
            W = e.isForumChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: ei.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(g.xJW, {
                                      className: s()(ei.settingsLeft, ei.settingsDefaultView),
                                      children: [
                                          (0, i.jsx)(g.hjN, {
                                              title: en.intl.string(en.t.kQvoCw),
                                              children: (0, i.jsx)(g.q4e, {
                                                  options: [
                                                      {
                                                          label: en.intl.string(en.t['4HXEZG']),
                                                          value: a.X.LIST
                                                      },
                                                      {
                                                          label: en.intl.string(en.t['8RswJC']),
                                                          value: a.X.GRID
                                                      }
                                                  ],
                                                  value: null != (d = e.defaultForumLayout) ? d : a.X.LIST,
                                                  onChange: this.handleChangeDefaultForumLayout
                                              })
                                          }),
                                          (0, i.jsx)(g.R94, {
                                              className: el.marginTop8,
                                              type: g.R94.Types.DESCRIPTION,
                                              children: en.intl.string(en.t.mOSViY)
                                          })
                                      ]
                                  }),
                                  e.defaultForumLayout === a.X.GRID ? (0, i.jsx)(q.Z, { className: ei.defaultImageView }) : (0, i.jsx)($.Z, { className: ei.defaultImageView })
                              ]
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                      ]
                  })
                : null,
            H = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.xJW, {
                              children: (0, i.jsx)(g.hjN, {
                                  title: en.intl.string(en.t.gePre3),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: en.intl.string(en.t.ElZtzs),
                                              value: c.z.LATEST_ACTIVITY
                                          },
                                          {
                                              label: en.intl.string(en.t.w28f3N),
                                              value: c.z.CREATION_DATE
                                          }
                                      ],
                                      value: e.getDefaultSortOrder(),
                                      onChange: this.handleChangeDefaultSortOrder
                                  })
                              })
                          }),
                          (0, i.jsx)(g.R94, {
                              className: el.marginTop8,
                              type: g.R94.Types.DESCRIPTION,
                              children: en.intl.string(en.t['165cVV'])
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                      ]
                  })
                : null,
            z = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.xJW, {
                              children: (0, i.jsx)(g.hjN, {
                                  title: en.intl.string(en.t.Paxaur),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: en.intl.string(en.t.rQ0ctb),
                                              value: o.z.MATCH_SOME
                                          },
                                          {
                                              label: en.intl.string(en.t.FCXUu7),
                                              value: o.z.MATCH_ALL
                                          }
                                      ],
                                      value: e.getDefaultTagSetting(),
                                      onChange: this.handleChangeDefaultTagSetting
                                  })
                              })
                          }),
                          (0, i.jsx)(g.R94, {
                              className: el.marginTop8,
                              type: g.R94.Types.DESCRIPTION,
                              children: en.intl.string(en.t.DqOl8P)
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                      ]
                  })
                : null,
            X = I ? v : j,
            K = A.X_.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(g.xJW, {
                              children: [
                                  (0, i.jsx)(g.vwX, {
                                      id: ec,
                                      className: el.marginBottom8,
                                      children: en.intl.string(en.t['tTHx9/'])
                                  }),
                                  P
                                      ? (0, i.jsx)(g.vwX, {
                                            className: el.marginTop20,
                                            children: en.intl.string(en.t.O1c02t)
                                        })
                                      : null,
                                  !0 === T
                                      ? (0, i.jsx)(J.Z, {
                                            channel: e,
                                            onChange: this.handleChangeSlowmode
                                        })
                                      : (0, i.jsx)(g.iRW, {
                                            className: el.marginTop20,
                                            initialValue: e.rateLimitPerUser,
                                            markers: Q.BiE,
                                            stickToMarkers: !0,
                                            onValueChange: this.handleChangeSlowmode,
                                            onMarkerRender: this.getCooldownSliderMarker,
                                            disabled: !X,
                                            equidistant: !0,
                                            'aria-labelledby': ec,
                                            'aria-describedby': ed
                                        }),
                                  (0, i.jsx)(g.R94, {
                                      id: ed,
                                      type: g.R94.Types.DESCRIPTION,
                                      children: P ? en.intl.string(en.t['a+1pdH']) : I ? en.intl.string(en.t.OMmNCg) : en.intl.string(en.t['HEA/DQ'])
                                  }),
                                  P
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(g.vwX, {
                                                    className: el.marginTop20,
                                                    children: en.intl.string(en.t['fkY5+v'])
                                                }),
                                                (0, i.jsx)(g.iRW, {
                                                    className: el.marginTop20,
                                                    initialValue: null != (h = e.defaultThreadRateLimitPerUser) ? h : 0,
                                                    markers: Q.BiE,
                                                    stickToMarkers: !0,
                                                    onValueChange: this.handleChangeThreadMessageSlowmode,
                                                    onMarkerRender: this.getCooldownSliderMarker,
                                                    disabled: !X,
                                                    equidistant: !0,
                                                    'aria-labelledby': ec,
                                                    'aria-describedby': ed
                                                }),
                                                (0, i.jsx)(g.R94, {
                                                    type: g.R94.Types.DESCRIPTION,
                                                    children: en.intl.string(en.t.kdZU6O)
                                                })
                                            ]
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                      ]
                  })
                : null,
            eu =
                I && null != e.threadMetadata
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(g.xJW, {
                                  children: (0, i.jsx)(f.Z, {
                                      page: Q.ZY5.CHANNEL_SETTINGS,
                                      children: (0, i.jsx)(D.Z, {
                                          isDisabled: !C,
                                          autoArchiveDuration: null != (m = e.threadMetadata.autoArchiveDuration) ? m : et.AX,
                                          onChange: this.handleAutoArchiveDurationChanged
                                      })
                                  })
                              }),
                              (0, i.jsx)(g.R94, {
                                  className: el.marginTop8,
                                  type: g.R94.Types.DESCRIPTION,
                                  children: O ? en.intl.string(en.t['3aJN9P']) : en.intl.string(en.t.YUXr4e)
                              })
                          ]
                      })
                    : null,
            eh =
                e.type === Q.d4z.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(g.j7V, {
                              note: en.intl.string(en.t.cSyXJi),
                              onChange: this.handleInvitableChanged,
                              value: e.threadMetadata.invitable,
                              hideBorder: !0,
                              disabled: !C,
                              children: en.intl.string(en.t.s2rpNT)
                          })
                      })
                    : null,
            eg = A.ov.has(e.type)
                ? (0, i.jsx)('div', {
                      children: (0, i.jsx)(g.j7V, {
                          note: en.intl.string(en.t['9eUgwc']),
                          onChange: this.handleNSFWChange,
                          value: e.isNSFW(),
                          hideBorder: !0,
                          disabled: !j || null != e.linkedLobby,
                          disabledText: null != e.linkedLobby ? en.intl.string(en.t.l6uSVV) : null,
                          children: en.intl.string(en.t.Es25YW)
                      })
                  })
                : null,
            em =
                A.Y0.has(e.type) && null != S && S.hasFeature(Q.oNc.NEWS) && e.id !== (null == S ? void 0 : S.rulesChannelId) && e.id !== (null == S ? void 0 : S.publicUpdatesChannelId)
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(g.j7V, {
                              note: (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('div', { children: en.intl.format(en.t.tI7KNT, { documentationLink: F.Z.getArticleURL(Q.BhN.ANNOUNCEMENT_CHANNELS) }) }),
                                      (0, i.jsx)('div', {
                                          className: el.marginTop8,
                                          children: en.intl.string(en.t['2Ab4IS'])
                                      })
                                  ]
                              }),
                              onChange: this.handleNewsChange,
                              value: e.type === Q.d4z.GUILD_ANNOUNCEMENT,
                              hideBorder: !0,
                              disabled: !j,
                              children: en.intl.string(en.t.Au2b7u)
                          })
                      })
                    : null,
            ep = A.uC.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) }),
                          (0, i.jsx)(f.Z, {
                              page: Q.ZY5.CHANNEL_SETTINGS,
                              children: (0, i.jsx)(D.Z, {
                                  isDisabled: !j,
                                  autoArchiveDuration: (0, _.WD)(e, null),
                                  onChange: this.handleChangeDefaultAutoArchiveDuration
                              })
                          }),
                          (0, i.jsx)(g.R94, {
                              className: el.marginTop8,
                              type: g.R94.Types.DESCRIPTION,
                              children: e.isForumLikeChannel() ? en.intl.string(en.t.fyXclZ) : en.intl.string(en.t.W3Noi4)
                          })
                      ]
                  })
                : null,
            ef = this.props.showChannelSummariesSettings
                ? (0, i.jsx)(g.j7V, {
                      note: en.intl.format(en.t.feJW19, { helpdeskArticle: F.Z.getArticleURL(Q.BhN.CONVERSATION_SUMMARIES) }),
                      onChange: this.handleChannelSummariesToggled,
                      value: !e.hasFlag(Y.zZ.SUMMARIES_DISABLED) && (null == S ? void 0 : S.hasFeature(Q.oNc.SUMMARIES_ENABLED_BY_USER)),
                      hideBorder: !0,
                      disabled: !j || !(null == S ? void 0 : S.hasFeature(Q.oNc.SUMMARIES_ENABLED_BY_USER)),
                      children: (0, i.jsxs)('div', {
                          className: ei.badgedItem,
                          children: [
                              en.intl.string(en.t.id3ozs),
                              (0, i.jsx)(g.IGR, {
                                  text: en.intl.string(en.t.oW0eUV),
                                  color: u.Z.colors.BG_BRAND.css
                              })
                          ]
                      })
                  })
                : null,
            ej = e.isMediaChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) }),
                          (0, i.jsx)(g.j7V, {
                              onChange: this.handleShowMediaOptionsToggled,
                              value: !e.hasFlag(Y.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                              note: en.intl.string(en.t.J4wCc3),
                              hideBorder: !0,
                              disabled: !j,
                              children: en.intl.string(en.t.u8LZOj)
                          })
                      ]
                  })
                : null;
        return (
            e.type === Q.d4z.GUILD_CATEGORY ? ((x = en.intl.string(en.t.OCAkGB)), (p = 'category-name')) : e.isForumPost() ? ((x = en.intl.string(en.t.uyVrTE)), (p = 'post-title')) : I ? ((x = en.intl.string(en.t.j3XWjI)), (p = 'thread-name')) : ((x = en.intl.string(en.t.PVbHDg)), (p = 'channel-name')),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(g.xJW, {
                        title: x,
                        children: (0, i.jsx)(g.oil, {
                            value: t,
                            onChange: this.handleChangeName,
                            onBlur: this.handleBlurName,
                            error: this.getError('name'),
                            name: p,
                            autoFocus: !0,
                            disabled: Z ? !b : !j,
                            maxLength: Q.HN8
                        })
                    }),
                    (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) }),
                    k,
                    B,
                    V,
                    G,
                    K,
                    eu,
                    W,
                    H,
                    z,
                    eh,
                    eg,
                    em,
                    ef,
                    ep,
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
        let l = (0, W.g7)(t, e),
            r = this.getError('bitrate');
        return (0, i.jsxs)(S.Z, {
            direction: S.Z.Direction.VERTICAL,
            className: el.marginBottom40,
            children: [
                (0, i.jsx)(g.vwX, {
                    id: eu,
                    children: en.intl.string(en.t.w2d0vb)
                }),
                '' !== r &&
                    (0, i.jsx)(g.R94, {
                        id: eh,
                        type: g.geA.DESCRIPTION,
                        style: { color: u.Z.unsafe_rawColors.RED_400.css },
                        className: el.marginBottom8,
                        children: r
                    }),
                (0, i.jsx)(g.iRW, {
                    initialValue: Math.min(e.bitrate, l),
                    onValueChange: this.handleChangeBitrate,
                    onValueRender: this.renderBitrate,
                    onMarkerRender: this.renderBitrate,
                    markers: [Q.Fc, Q.epw, l],
                    minValue: Q.Fc,
                    maxValue: l,
                    keyboardStep: Q.V7H,
                    disabled: !n,
                    'aria-labelledby': eu,
                    'aria-describedby': null != r && '' !== r ? eh : eg
                }),
                l > Q.epw
                    ? (0, i.jsx)(g.R94, {
                          id: eg,
                          type: g.geA.DESCRIPTION,
                          children: en.intl.format(en.t.SbQJk5, { bitrate: Q.epw / 1000 })
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
            A.vg.has(e.type) &&
            (e.isGuildVocal() ||
                I.tM.getCurrentConfig({
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
                value: Q.Ucd.AUTO,
                name: en.intl.string(en.t.jjKYpq)
            },
            {
                value: Q.Ucd.FULL,
                name: en.intl.string(en.t['7jOoJC'])
            }
        ];
        return (0, i.jsxs)(S.Z, {
            direction: S.Z.Direction.VERTICAL,
            className: el.marginBottom40,
            children: [
                (0, i.jsx)(g.xJW, {
                    title: en.intl.string(en.t.jhJEJi),
                    children: (0, i.jsx)(g.FXm, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return this.handleVideoQualityModeChange(t);
                        },
                        options: l,
                        value: null != (t = e.videoQualityMode) ? t : Q.Ucd.AUTO,
                        disabled: !n
                    })
                }),
                (0, i.jsx)(g.R94, {
                    type: g.geA.DESCRIPTION,
                    children: en.intl.format(en.t.c5W7Sk, {})
                })
            ]
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e)) ? en.intl.string(en.t.XX5ciY) : en.intl.formatToPlainString(en.t['3uHFUV'], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError('user_limit'),
            l = e.isGuildStageVoice() ? Q.xGv : Q.$pe;
        return (0, i.jsxs)(S.Z, {
            direction: S.Z.Direction.VERTICAL,
            className: el.marginBottom40,
            children: [
                (0, i.jsx)(g.vwX, {
                    id: em,
                    children: en.intl.string(en.t['/AoSGB'])
                }),
                '' !== n &&
                    (0, i.jsx)(g.R94, {
                        id: ep,
                        type: g.geA.DESCRIPTION,
                        style: { color: u.Z.unsafe_rawColors.RED_400.css },
                        className: el.marginBottom8,
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
                    'aria-labelledby': em,
                    'aria-describedby': null != n && '' !== n ? ep : ef
                }),
                (0, i.jsx)(g.R94, {
                    id: ef,
                    type: g.geA.DESCRIPTION,
                    children: en.intl.format(e.isGuildStageVoice() ? en.t.OqZI8P : en.t['8yb3JS'], {})
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
                label: en.intl.string(en.t.JEmsam),
                value: ej
            });
        let a = null != (t = e.rtcRegion) ? t : ej;
        return (0, i.jsxs)(S.Z, {
            direction: S.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)(g.vwX, { children: en.intl.string(en.t.Ms8bX1) }),
                (0, i.jsx)(g.q4e, {
                    options: s,
                    value: a,
                    onChange: this.handleRegionChange,
                    isDisabled: !l
                }),
                (0, i.jsx)(g.R94, {
                    type: g.geA.DESCRIPTION,
                    children: en.intl.string(en.t['dbTs+/'])
                })
            ]
        });
    }
    renderJuiceImage(e) {
        let t,
            { theme: l } = this.props;
        return (
            (t = e.type === Q.d4z.GUILD_CATEGORY ? ((0, h.wj)(l) ? n(309095) : n(925442)) : (0, h.wj)(l) ? n(316491) : n(301358)),
            (0, i.jsx)(S.Z, {
                justify: S.Z.Justify.CENTER,
                className: el.marginTop60,
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
                  title: en.intl.string(en.t['/dp6yc']),
                  children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, i.jsx)(g.$i$, { className: s()(el.marginTop40, el.marginBottom40) }) : null, this.renderVoiceBitrate(e, n), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderJuiceImage(e)]
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
        super(e),
            er(this, 'defaultReactionButtonRef', l.createRef()),
            er(this, 'renderEmojiPicker', (e) => {
                let { closePopout: t } = e,
                    { channel: n } = this.props;
                return (0, i.jsx)(Z.Z, {
                    guildId: null == n ? void 0 : n.guild_id,
                    closePopout: t,
                    onSelectEmoji: (e, n) => {
                        this.handleChangeDefaultReactionEmoji(e), n && t();
                    },
                    pickerIntention: K.Hz.COMMUNITY_CONTENT,
                    channel: n
                });
            }),
            er(this, 'handleRequireTagChanged', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, z.mB)(t.flags, Y.zZ.REQUIRE_TAG, e);
                (0, m.pW)({ flags: n });
            }),
            er(this, 'handleChangeName', (e) => {
                let { channel: t } = this.props;
                null != t && (t.isThread() ? (e = (0, P.Z)(e, !1)) : Q.TPd.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, W.Nj)(e)), (0, m.pW)({ name: e }));
            }),
            er(this, 'handleBlurName', () => {
                let { channel: e, channelName: t } = this.props;
                if ((null == e ? void 0 : e.isThread()) && null != t) {
                    let e = (0, P.Z)(t, !0);
                    e !== t && (0, m.pW)({ name: e });
                }
            }),
            er(this, 'handleChangeTopic', (e) => {
                (0, m.pW)({ topic: w.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            er(this, 'handleChangeRichTopic', (e, t, n) => {
                this.setState({
                    textTopicValue: t,
                    richTopicValue: n
                }),
                    this.handleChangeTopic(t);
            }),
            er(this, 'handleChangeTemplate', (e) => {
                (0, m.pW)({ template: w.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            er(this, 'handleChangeDefaultReactionEmoji', (e) => {
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
                (0, m.pW)({ defaultReactionEmoji: t });
            }),
            er(this, 'handleChangeDefaultForumLayout', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, m.pW)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e);
            }),
            er(this, 'handleChangeDefaultSortOrder', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, m.pW)({ defaultSortOrder: e });
            }),
            er(this, 'handleChangeDefaultTagSetting', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, m.pW)({ defaultTagSetting: e });
            }),
            er(this, 'handleChangeBitrate', (e) => {
                (0, m.pW)({ bitrate: 1000 * Math.round(e / 1000) });
            }),
            er(this, 'handleUserLimitChange', (e) => {
                (0, m.pW)({ userLimit: Math.round(e) });
            }),
            er(this, 'handleNSFWChange', (e) => {
                (0, m.pW)({ nsfw: e });
            }),
            er(this, 'handleActiveChannelsRemovedChange', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, z.mB)(t.flags, Y.zZ.ACTIVE_CHANNELS_REMOVED, !e);
                (0, m.pW)({ flags: n });
            }),
            er(this, 'handleNewsChange', (e) => {
                (0, m.pW)({ type: e ? Q.d4z.GUILD_ANNOUNCEMENT : Q.d4z.GUILD_TEXT });
            }),
            er(this, 'handleChangeSlowmode', (e) => {
                (0, m.pW)({ rateLimitPerUser: e });
            }),
            er(this, 'handleChangeThreadMessageSlowmode', (e) => {
                (0, m.pW)({ defaultThreadRateLimitPerUser: e });
            }),
            er(this, 'handleChangeDefaultAutoArchiveDuration', (e) => {
                (0, m.pW)({ defaultAutoArchiveDuration: e });
            }),
            er(this, 'handleRegionChange', (e) => {
                (0, m.pW)({ rtcRegion: e === ej ? null : e });
            }),
            er(this, 'handleVideoQualityModeChange', (e) => {
                (0, m.pW)({ videoQualityMode: e });
            }),
            er(this, 'handleAutoArchiveDurationChanged', (e) => {
                (0, m.pW)({ autoArchiveDuration: e });
            }),
            er(this, 'handleInvitableChanged', (e) => {
                (0, m.pW)({ invitable: e });
            }),
            er(this, 'handleChannelSummariesToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, z.mB)(t.flags, Y.zZ.SUMMARIES_DISABLED, !e);
                (0, m.pW)({ flags: n });
            }),
            er(this, 'handleShowMediaOptionsToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, z.mB)(t.flags, Y.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                (0, m.pW)({ flags: n });
            });
        let r = null != (n = null == (t = this.props.channel) ? void 0 : t.topic) ? n : '';
        this.state = {
            textTopicValue: r,
            richTopicValue: (0, C.JM)(r),
            topicFocused: !1
        };
    }
}
function ey() {
    let { errors: e, channel: t, submitting: n, subsection: r } = (0, d.cj)([k.Z], () => k.Z.getProps()),
        s = (0, d.e7)([G.Z], () => {
            var e;
            return G.Z.getRegions(null != (e = null == t ? void 0 : t.getGuildId()) ? e : null);
        }),
        a = (0, d.e7)([L.Z], () => L.Z.theme),
        o = (0, d.e7)([B.Z], () => B.Z.getGuild(null == t ? void 0 : t.getGuildId())),
        c = (0, I.C7)(t),
        u = (0, I.Xb)(t),
        { canManageChannels: h, canSendMessages: g } = (0, d.cj)([V.Z], () => ({
            canManageChannels: V.Z.can(Q.Plq.MANAGE_CHANNELS, t),
            canSendMessages: V.Z.can(Q.Plq.SEND_MESSAGES, t)
        })),
        m = (0, v.ZP)(t),
        p = M.default.getId(),
        f = (0, T.v)(),
        x = null == t ? void 0 : t.id,
        y = (0, b.ts)(t, !1, !0),
        C = j.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'ChannelSettingsOverview'
        }).enabled,
        N = l.useCallback(
            (e) => {
                null != x && f.getState().setLayoutType(x, e);
            },
            [x, f]
        );
    return (0, i.jsx)(ev, {
        errors: e,
        channel: t,
        channelName: m,
        submitting: n,
        regions: s,
        theme: a,
        guild: o,
        canManageChannels: (null == t ? void 0 : t.isThread()) ? c : h,
        canSendMessages: g,
        isThreadModerator: u,
        canManageThread: c,
        subsection: r,
        isForumPost: null != t && t.isForumPost(),
        isOwner: null == t ? void 0 : t.isOwner(p),
        handleSetDefaultLayout: N,
        showChannelSummariesSettings: y,
        showAdvancedSlowModeSetting: C
    });
}
