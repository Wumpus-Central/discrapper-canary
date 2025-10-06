n.d(t, {
    G: () => eI,
    Z: () => eL,
}),
    n(997841),
    n(953529),
    n(290780);
var i = n(951288),
    l = n(647438),
    r = n(120356),
    s = n.n(r),
    a = n(913527),
    o = n.n(a),
    c = n(313361),
    d = n(697988),
    u = n(683860),
    h = n(442837),
    g = n(692547),
    p = n(780384),
    m = n(481060),
    f = n(787014),
    b = n(771340),
    x = n(410575),
    j = n(852860),
    v = n(129865),
    y = n(902840),
    C = n(622822),
    N = n(933557),
    S = n(541716),
    E = n(752305),
    O = n(893718),
    Z = n(409513),
    w = n(600164),
    T = n(313201),
    R = n(318766),
    _ = n(907040),
    I = n(906411),
    P = n(633302),
    A = n(109434),
    L = n(162389),
    M = n(946458),
    D = n(968437),
    k = n(665906),
    B = n(456077),
    H = n(747212),
    V = n(210887),
    U = n(131704),
    G = n(601964),
    W = n(314897),
    F = n(388610),
    z = n(430824),
    X = n(496675),
    q = n(903223),
    Q = n(594174),
    Y = n(934415),
    J = n(55935),
    K = n(70956),
    $ = n(630388),
    ee = n(63063),
    et = n(129724),
    en = n(732335),
    ei = n(296146),
    el = n(564735),
    er = n(981631),
    es = n(176505),
    ea = n(185923),
    eo = n(710352),
    ec = n(124368),
    ed = n(388032),
    eu = n(257294),
    eh = n(197571);
function eg(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function ep(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                eg(e, t, n[t]);
            });
    }
    return e;
}
function em(e, t) {
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
let ef = (0, T.hQ)(),
    eb = (0, T.hQ)(),
    ex = (0, T.hQ)(),
    ej = (0, T.hQ)(),
    ev = (0, T.hQ)(),
    ey = (0, T.hQ)(),
    eC = (0, T.hQ)(),
    eN = (0, T.hQ)(),
    eS = (0, T.hQ)(),
    eE = (0, T.hQ)(),
    eO = (0, T.hQ)(),
    eZ = (0, U.kt)({
        id: "1",
        type: er.d4z.DM,
    }),
    ew = {
        popoutLocation: {
            page: er.ZY5.CHANNEL_SETTINGS,
            section: er.jXE.CHANNEL_DEFAULT_REACTION,
            object: er.qAy.EMOJI_PICKER_BUTTON,
        },
    },
    eT = {
        popoutLocation: {
            page: er.ZY5.CHANNEL_SETTINGS,
            section: er.jXE.CHANNEL_NAME,
            object: er.qAy.EMOJI_PICKER_BUTTON,
        },
    },
    eR = "AUTOMATIC_RTC_REGION",
    e_ = {
        breakingChangeDate: (0, J.vc)(o()(er.zQD), "LL"),
        helpCenterLink: ee.Z.getArticleURL(er.BhN.SLOWMODE),
    },
    eI = h.ZP.connectStores([F.Z], () => {
        let { channel: e, submitting: t } = F.Z.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, f.S1)(e.id);
            },
            onSave() {
                if (null == e) return;
                let {
                    name: t,
                    type: n,
                    topic: i,
                    bitrate: l,
                    userLimit: r,
                    nsfw: s,
                    flags: a,
                    rateLimitPerUser: o,
                    defaultThreadRateLimitPerUser: c,
                    threadMetadata: d,
                    defaultAutoArchiveDuration: u,
                    template: h,
                    rtcRegion: g,
                    videoQualityMode: p,
                    defaultReactionEmoji: m,
                    availableTags: b,
                    defaultSortOrder: x,
                    defaultForumLayout: j,
                    defaultTagSetting: v,
                } = e;
                e.isThread() && (t = (0, B.Z)(t, !0)),
                    (0, f.wk)(e.id, {
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
                        defaultReactionEmoji: m,
                        availableTags: b,
                        defaultSortOrder: x,
                        defaultForumLayout: j,
                        defaultTagSetting: v,
                    });
            },
        };
    })(j.Z);
function eP(e) {
    let { onEmojiPicked: t, channel: n, guildId: r } = e,
        s = l.useRef(null),
        a = l.useCallback(
            (e) => {
                let { closePopout: l } = e;
                return (0, i.jsx)(_.Z, {
                    channel: n,
                    guildId: r,
                    pickerIntention: ea.Hz.CHANNEL_NAME,
                    closePopout: l,
                    onNavigateAway: l,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        null != n && n.type === I.B.UNICODE && t(n.surrogates), i && l();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: eT,
                });
            },
            [n, r, t],
        );
    return (0, i.jsx)(m.yRy, {
        targetElementRef: s,
        renderPopout: a,
        animation: m.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(
                R.Z,
                em(ep({}, e), {
                    ref: s,
                    active: n,
                    className: eu.emojiButton,
                    tabIndex: 0,
                    focusProps: {
                        offset: {
                            top: 10,
                            bottom: 10,
                            left: -4,
                            right: 10,
                        },
                    },
                }),
            );
        },
    });
}
class eA extends l.PureComponent {
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && b.Z.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        var t, n, i, l;
        let r = null != (i = null == (t = this.props.channel) ? void 0 : t.topic) ? i : "";
        (null != (l = null == (n = e.channel) ? void 0 : n.topic) ? l : "") !== r &&
            r !== this.state.textTopicValue &&
            this.setState({
                textTopicValue: r,
                richTopicValue: (0, E.JM)(r),
            });
    }
    getError(e) {
        let { errors: t } = this.props;
        return null == t ? void 0 : t[e];
    }
    getSlowmodeHelpText(e) {
        let { channel: t } = this.props;
        return (null == t ? void 0 : t.isForumLikeChannel())
            ? e
                ? ed.intl.format(ed.t.EIQq9v, e_)
                : ed.intl.string(ed.t["a+1pdH"])
            : (null == t ? void 0 : t.isThread())
              ? e
                  ? ed.intl.format(ed.t["8sTC8v"], e_)
                  : ed.intl.string(ed.t.OMmNCg)
              : e
                ? ed.intl.format(ed.t.wW2MWl, e_)
                : ed.intl.string(ed.t["HEA/DQ"]);
    }
    getCooldownSliderMarker(e) {
        return (0, et.A)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, et.A)(e * K.Z.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        var n, l, r, a, o, h, g;
        let p,
            f,
            {
                canManageChannels: b,
                canSendMessages: j,
                isThreadModerator: v,
                canManageThread: y,
                guild: N,
                isForumPost: E,
                isOwner: w,
                showAdvancedSlowModeSetting: T,
            } = this.props,
            R = U.Ec.has(e.type),
            _ = e.isForumLikeChannel(),
            I = _ && (null == (n = e.availableTags) ? void 0 : n.every((e) => e.moderated)),
            A = (null == (l = Q.default.getCurrentUser()) ? void 0 : l.isStaff()) === !0,
            k = U.TK.has(e.type)
                ? (0, i.jsx)(m.NIc, {
                      label: _ ? ed.intl.string(ed.t.yR6Hwc) : ed.intl.string(ed.t.X8jMDg),
                      children: (0, i.jsx)(O.ZP, {
                          className: s()(eu.topicContainer, { [eu.disabled]: !b }),
                          innerClassName: s()(eu.topic, { [eu.disabled]: !b }),
                          characterCountClassName: eu.topicCharacterCount,
                          maxCharacterCount: _ ? es.Z7 : es.$x,
                          onChange: this.handleChangeRichTopic,
                          placeholder: ed.intl.string(ed.t["71fbmp"]),
                          channel: eZ,
                          textValue: this.state.textTopicValue,
                          richValue: this.state.richTopicValue,
                          type: _ ? S.Ie.FORUM_CHANNEL_GUIDELINES : S.Ie.CHANNEL_TOPIC,
                          onFocus: () => {
                              this.setState({ topicFocused: !0 });
                          },
                          onBlur: () => {
                              this.setState({ topicFocused: !1 });
                          },
                          focused: this.state.topicFocused,
                          onSubmit: this.handleSubmit,
                          disableThemedBackground: !0,
                          error: this.getError("topic"),
                          disabled: !b,
                          showValueWhenDisabled: !0,
                      }),
                  })
                : null,
            B =
                _ && A
                    ? (0, i.jsx)(m.Kx8, {
                          label: ed.intl.string(ed.t.qk2jdX),
                          placeholder: ed.intl.string(ed.t.DDjD1N),
                          value: P.ZP.translateSurrogatesToInlineEmoji(null != (a = e.template) ? a : ""),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: eo.Vb,
                          disabled: !b,
                          autosize: !0,
                          showCharacterCount: !0,
                      })
                    : null,
            V = e.isForumLikeChannel()
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(m.NIc, {
                              label: ed.intl.string(ed.t["P/y+sr"]),
                              description: ed.intl.string(ed.t["/oQQ39"]),
                              errorMessage: this.getError("available_tags"),
                              id: ef,
                              children: (0, i.jsx)(L.Z, { channel: e }),
                          }),
                          (0, i.jsx)(m.XZJ, {
                              disabled: !b || I,
                              checked: e.hasFlag(es.zZ.REQUIRE_TAG),
                              onChange: (e) => this.handleRequireTagChanged(e),
                              label: ed.intl.string(ed.t["9g2Zys"]),
                          }),
                      ],
                  })
                : null,
            W = e.isForumLikeChannel()
                ? (0, i.jsx)("div", {
                      children: (0, i.jsxs)("div", {
                          className: eu.twoColumnSettings,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: s()(eu.settingsLeft, eu.settingsDefaultReaction),
                                  children: [
                                      (0, i.jsx)(m.vwX, {
                                          id: ex,
                                          className: eu.formTitle,
                                          children: ed.intl.string(ed.t["8ao1+P"]),
                                      }),
                                      (0, i.jsx)(m.R94, {
                                          id: eb,
                                          type: m.R94.Types.DESCRIPTION,
                                          className: eu.description,
                                          children: ed.intl.string(ed.t.SdbF0t),
                                      }),
                                      (0, i.jsxs)(m.hE2, {
                                          align: "center",
                                          children: [
                                              (0, i.jsx)(m.yRy, {
                                                  targetElementRef: this.defaultReactionButtonRef,
                                                  renderPopout: this.renderEmojiPicker,
                                                  position: "right",
                                                  animation: m.yRy.Animation.NONE,
                                                  align: "center",
                                                  children: (e) =>
                                                      (0, i.jsx)(
                                                          m.zxk,
                                                          em(ep({}, e), {
                                                              buttonRef: this.defaultReactionButtonRef,
                                                              text: ed.intl.string(ed.t["59QgaG"]),
                                                              disabled: !b,
                                                              onClick: (t) => {
                                                                  var n;
                                                                  null == (n = e.onClick) || n.call(e, t);
                                                              },
                                                          }),
                                                      ),
                                              }),
                                              null != e.defaultReactionEmoji
                                                  ? (0, i.jsx)(m.Avr, {
                                                        text: ed.intl.string(ed.t.N86XcH),
                                                        onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                        variant: "critical",
                                                    })
                                                  : null,
                                          ],
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(M.Z, { reactionEmoji: e.defaultReactionEmoji }),
                          ],
                      }),
                  })
                : null,
            F = e.isForumChannel()
                ? (0, i.jsx)("div", {
                      children: (0, i.jsxs)("div", {
                          className: eu.twoColumnSettings,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: s()(eu.settingsLeft, eu.settingsDefaultView),
                                  children: [
                                      (0, i.jsx)(m.hjN, {
                                          title: ed.intl.string(ed.t.kQvoCw),
                                          children: (0, i.jsx)(m.q4e, {
                                              options: [
                                                  {
                                                      label: ed.intl.string(ed.t["4HXEZG"]),
                                                      value: c.X.LIST,
                                                  },
                                                  {
                                                      label: ed.intl.string(ed.t["8RswJC"]),
                                                      value: c.X.GRID,
                                                  },
                                              ],
                                              value: null != (o = e.defaultForumLayout) ? o : c.X.LIST,
                                              onChange: this.handleChangeDefaultForumLayout,
                                          }),
                                      }),
                                      (0, i.jsx)(m.R94, {
                                          className: eh.marginTop8,
                                          type: m.R94.Types.DESCRIPTION,
                                          children: ed.intl.string(ed.t.mOSViY),
                                      }),
                                  ],
                              }),
                              e.defaultForumLayout === c.X.GRID
                                  ? (0, i.jsx)(ei.Z, { className: eu.defaultImageView })
                                  : (0, i.jsx)(el.Z, { className: eu.defaultImageView }),
                          ],
                      }),
                  })
                : null,
            z = e.isForumLikeChannel()
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(m.hjN, {
                              title: ed.intl.string(ed.t.gePre3),
                              children: (0, i.jsx)(m.q4e, {
                                  options: [
                                      {
                                          label: ed.intl.string(ed.t.ElZtzs),
                                          value: u.z.LATEST_ACTIVITY,
                                      },
                                      {
                                          label: ed.intl.string(ed.t.w28f3N),
                                          value: u.z.CREATION_DATE,
                                      },
                                  ],
                                  value: e.getDefaultSortOrder(),
                                  onChange: this.handleChangeDefaultSortOrder,
                              }),
                          }),
                          (0, i.jsx)(m.R94, {
                              className: eh.marginTop8,
                              type: m.R94.Types.DESCRIPTION,
                              children: ed.intl.string(ed.t["165cVV"]),
                          }),
                      ],
                  })
                : null,
            X = e.isForumLikeChannel()
                ? (0, i.jsx)(m.q4e, {
                      label: ed.intl.string(ed.t.Paxaur),
                      description: ed.intl.string(ed.t.DqOl8P),
                      options: [
                          {
                              label: ed.intl.string(ed.t.rQ0ctb),
                              value: d.z.MATCH_SOME,
                          },
                          {
                              label: ed.intl.string(ed.t.FCXUu7),
                              value: d.z.MATCH_ALL,
                          },
                      ],
                      value: e.getDefaultTagSetting(),
                      onChange: this.handleChangeDefaultTagSetting,
                  })
                : null,
            q = R ? v : b,
            Y =
                null ==
                (r = Z.Z.getCurrentConfig({
                    guildId: e.guild_id,
                    location: "ChannelSettingsOverview",
                }))
                    ? void 0
                    : r.enabled,
            J = U.X_.has(e.type)
                ? (0, i.jsx)("div", {
                      children: (0, i.jsx)(m.hjN, {
                          title: _ ? ed.intl.string(ed.t.O1c02t) : void 0,
                          children: (0, i.jsxs)(m.Kqy, {
                              gap: 20,
                              children: [
                                  !0 === T
                                      ? (0, i.jsx)(en.Z, {
                                            label: ed.intl.string(ed.t["tTHx9/"]),
                                            helperText: this.getSlowmodeHelpText(Y),
                                            channel: e,
                                            onChange: this.handleChangeSlowmode,
                                        })
                                      : (0, i.jsx)(m.iRW, {
                                            label: ed.intl.string(ed.t["tTHx9/"]),
                                            helperText: this.getSlowmodeHelpText(Y),
                                            className: eh.marginTop20,
                                            initialValue: e.rateLimitPerUser,
                                            markers: er.BiE,
                                            stickToMarkers: !0,
                                            onValueChange: this.handleChangeSlowmode,
                                            onMarkerRender: this.getCooldownSliderMarker,
                                            disabled: !q,
                                            equidistant: !0,
                                            "aria-labelledby": ej,
                                            "aria-describedby": ev,
                                        }),
                                  _
                                      ? (0, i.jsx)(m.iRW, {
                                            label: ed.intl.string(ed.t["fkY5+v"]),
                                            helperText: Y
                                                ? ed.intl.format(ed.t.nZSuEh, e_)
                                                : ed.intl.string(ed.t.kdZU6O),
                                            initialValue: null != (h = e.defaultThreadRateLimitPerUser) ? h : 0,
                                            markers: er.BiE,
                                            stickToMarkers: !0,
                                            onValueChange: this.handleChangeThreadMessageSlowmode,
                                            onMarkerRender: this.getCooldownSliderMarker,
                                            disabled: !q,
                                            equidistant: !0,
                                            "aria-labelledby": ej,
                                            "aria-describedby": ev,
                                        })
                                      : null,
                              ],
                          }),
                      }),
                  })
                : null,
            K =
                R && null != e.threadMetadata
                    ? (0, i.jsxs)("div", {
                          children: [
                              (0, i.jsx)(x.Z, {
                                  page: er.ZY5.CHANNEL_SETTINGS,
                                  children: (0, i.jsx)(H.Z, {
                                      isDisabled: !y,
                                      autoArchiveDuration:
                                          null != (g = e.threadMetadata.autoArchiveDuration) ? g : ec.AX,
                                      onChange: this.handleAutoArchiveDurationChanged,
                                  }),
                              }),
                              (0, i.jsx)(m.R94, {
                                  className: eh.marginTop8,
                                  type: m.R94.Types.DESCRIPTION,
                                  children: E ? ed.intl.string(ed.t["3aJN9P"]) : ed.intl.string(ed.t.YUXr4e),
                              }),
                          ],
                      })
                    : null,
            $ =
                e.type === er.d4z.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, i.jsx)("div", {
                          children: (0, i.jsx)(m.rsf, {
                              label: ed.intl.string(ed.t.s2rpNT),
                              description: ed.intl.string(ed.t.cSyXJi),
                              checked: e.threadMetadata.invitable,
                              onChange: this.handleInvitableChanged,
                              disabled: !y,
                          }),
                      })
                    : null,
            et = null != N && (0, G.Y2)(N),
            ea = U.ov.has(e.type)
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(m.rsf, {
                              label: ed.intl.string(ed.t.Es25YW),
                              description: ed.intl.string(ed.t["9eUgwc"]),
                              onChange: this.handleNSFWChange,
                              checked: (0, C.qF)(e),
                              disabled: !b || null != e.linkedLobby || et,
                          }),
                          null != e.linkedLobby
                              ? (0, i.jsx)(m.Wn, {
                                    messageType: m.QYI.WARNING,
                                    children: ed.intl.string(ed.t.l6uSVV),
                                })
                              : null,
                      ],
                  })
                : null,
            eg =
                U.Y0.has(e.type) &&
                null != N &&
                N.features.has(er.oNc.NEWS) &&
                e.id !== (null == N ? void 0 : N.rulesChannelId) &&
                e.id !== (null == N ? void 0 : N.publicUpdatesChannelId)
                    ? (0, i.jsxs)(m.Kqy, {
                          gap: 4,
                          children: [
                              (0, i.jsx)(m.rsf, {
                                  label: ed.intl.string(ed.t.Au2b7u),
                                  description: ed.intl.format(ed.t.tI7KNT, {
                                      documentationLink: ee.Z.getArticleURL(er.BhN.ANNOUNCEMENT_CHANNELS),
                                  }),
                                  onChange: this.handleNewsChange,
                                  checked: e.type === er.d4z.GUILD_ANNOUNCEMENT,
                                  disabled: !b,
                              }),
                              (0, i.jsx)(m.Wn, {
                                  messageType: m.QYI.INFO,
                                  children: ed.intl.string(ed.t["2Ab4IS"]),
                              }),
                          ],
                      })
                    : null,
            ey = U.uC.has(e.type)
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(x.Z, {
                              page: er.ZY5.CHANNEL_SETTINGS,
                              children: (0, i.jsx)(H.Z, {
                                  isDisabled: !b,
                                  autoArchiveDuration: (0, D.WD)(e, null),
                                  onChange: this.handleChangeDefaultAutoArchiveDuration,
                              }),
                          }),
                          (0, i.jsx)(m.R94, {
                              className: eh.marginTop8,
                              type: m.R94.Types.DESCRIPTION,
                              children: e.isForumLikeChannel()
                                  ? ed.intl.string(ed.t.fyXclZ)
                                  : ed.intl.string(ed.t.W3Noi4),
                          }),
                      ],
                  })
                : null,
            eC = this.props.showChannelSummariesSettings
                ? (0, i.jsx)(m.rsf, {
                      label: ed.intl.string(ed.t.id3ozs),
                      description: ed.intl.format(ed.t.feJW19, {
                          helpdeskArticle: ee.Z.getArticleURL(er.BhN.CONVERSATION_SUMMARIES),
                      }),
                      badge: "beta",
                      onChange: this.handleChannelSummariesToggled,
                      checked:
                          !e.hasFlag(es.zZ.SUMMARIES_DISABLED) &&
                          (null == N ? void 0 : N.features.has(er.oNc.SUMMARIES_ENABLED_BY_USER)),
                      disabled: !b || !(null == N ? void 0 : N.features.has(er.oNc.SUMMARIES_ENABLED_BY_USER)),
                  })
                : null,
            eN = e.isMediaChannel()
                ? (0, i.jsx)(m.rsf, {
                      label: ed.intl.string(ed.t.u8LZOj),
                      description: ed.intl.string(ed.t.J4wCc3),
                      checked: !e.hasFlag(es.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      onChange: this.handleShowMediaOptionsToggled,
                      disabled: !b,
                  })
                : null;
        e.type === er.d4z.GUILD_CATEGORY
            ? ((f = ed.intl.string(ed.t.OCAkGB)), (p = "category-name"))
            : e.isForumPost()
              ? ((f = ed.intl.string(ed.t.uyVrTE)), (p = "post-title"))
              : R
                ? ((f = ed.intl.string(ed.t.j3XWjI)), (p = "thread-name"))
                : ((f = ed.intl.string(ed.t.PVbHDg)), (p = "channel-name"));
        let eS = w ? j : b;
        return (0, i.jsxs)(m.Kqy, {
            gap: 24,
            children: [
                (0, i.jsx)(m.oil, {
                    label: f,
                    fullWidth: !0,
                    inputRef: this.nameInputRef,
                    value: t,
                    onChange: this.handleChangeName,
                    onBlur: this.handleBlurName,
                    error: this.getError("name"),
                    name: p,
                    autoFocus: !0,
                    disabled: !eS,
                    maxLength: er.HN8,
                    trailing: eS
                        ? {
                              type: "emoji",
                              button: (0, i.jsx)(eP, {
                                  onEmojiPicked: this.insertEmojiAtPosition,
                                  channel: e,
                                  guildId: null == e ? void 0 : e.guild_id,
                              }),
                          }
                        : void 0,
                }),
                k,
                B,
                V,
                W,
                J,
                K,
                F,
                z,
                X,
                $,
                ea,
                eg,
                eC,
                ey,
                eN,
            ],
        });
    }
    renderBitrate(e) {
        return "".concat(Math.round(e / 1000), "kbps");
    }
    renderVoiceBitrate(e, t) {
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let l = (0, Y.g7)(t, e),
            r = this.getError("bitrate");
        return (0, i.jsxs)(w.Z, {
            direction: w.Z.Direction.VERTICAL,
            className: eh.marginBottom40,
            children: [
                (0, i.jsx)(m.vwX, {
                    id: ey,
                    children: ed.intl.string(ed.t.w2d0vb),
                }),
                "" !== r &&
                    (0, i.jsx)(m.R94, {
                        id: eC,
                        type: m.geA.DESCRIPTION,
                        style: { color: g.Z.unsafe_rawColors.RED_400.css },
                        className: eh.marginBottom8,
                        children: r,
                    }),
                (0, i.jsx)(m.iRW, {
                    initialValue: Math.min(e.bitrate, l),
                    onValueChange: this.handleChangeBitrate,
                    onValueRender: this.renderBitrate,
                    onMarkerRender: this.renderBitrate,
                    markers: [er.Fc, er.epw, l],
                    minValue: er.Fc,
                    maxValue: l,
                    keyboardStep: er.V7H,
                    disabled: !n,
                    "aria-labelledby": ey,
                    "aria-describedby": null != r && "" !== r ? eC : eN,
                }),
                l > er.epw
                    ? (0, i.jsx)(m.R94, {
                          id: eN,
                          type: m.geA.DESCRIPTION,
                          children: ed.intl.format(ed.t.SbQJk5, { bitrate: er.epw / 1000 }),
                      })
                    : null,
            ],
        });
    }
    showVoiceSettings() {
        let { channel: e } = this.props;
        return (
            null != e &&
            null != e.guild_id &&
            U.vg.has(e.type) &&
            (e.isGuildVocal() ||
                k.tM.getCurrentConfig({
                    guildId: e.guild_id,
                    location: "9b50bd_1",
                }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        var t;
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let l = [
            {
                value: er.Ucd.AUTO,
                name: ed.intl.string(ed.t.jjKYpq),
            },
            {
                value: er.Ucd.FULL,
                name: ed.intl.string(ed.t["7jOoJC"]),
            },
        ];
        return (0, i.jsxs)(w.Z, {
            direction: w.Z.Direction.VERTICAL,
            className: eh.marginBottom40,
            children: [
                (0, i.jsx)(m.FXm, {
                    label: ed.intl.string(ed.t.jhJEJi),
                    onChange: (e) => this.handleVideoQualityModeChange(e),
                    options: l,
                    value: null != (t = e.videoQualityMode) ? t : er.Ucd.AUTO,
                    disabled: !n,
                }),
                (0, i.jsx)(m.R94, {
                    type: m.geA.DESCRIPTION,
                    children: ed.intl.format(ed.t.c5W7Sk, {}),
                }),
            ],
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e))
            ? ed.intl.string(ed.t.XX5ciY)
            : ed.intl.formatToPlainString(ed.t["3uHFUV"], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError("user_limit"),
            l = e.isGuildStageVoice() ? er.xGv : er.$pe;
        return (0, i.jsxs)(w.Z, {
            direction: w.Z.Direction.VERTICAL,
            className: eh.marginBottom40,
            children: [
                (0, i.jsx)(m.vwX, {
                    id: eS,
                    children: ed.intl.string(ed.t["/AoSGB"]),
                }),
                "" !== n &&
                    (0, i.jsx)(m.R94, {
                        id: eE,
                        type: m.geA.DESCRIPTION,
                        style: { color: g.Z.unsafe_rawColors.RED_400.css },
                        className: eh.marginBottom8,
                        children: n,
                    }),
                (0, i.jsx)(m.iRW, {
                    initialValue: Math.min(e.userLimit, l),
                    onValueChange: this.handleUserLimitChange,
                    onValueRender: this.onRenderUserLimit,
                    onMarkerRender: (e) => (0 === Math.round(e) ? "\u221E" : e),
                    markers: [0, l],
                    minValue: 0,
                    maxValue: l,
                    disabled: !t,
                    "aria-labelledby": eS,
                    "aria-describedby": null != n && "" !== n ? eE : eO,
                }),
                (0, i.jsx)(m.R94, {
                    id: eO,
                    type: m.geA.DESCRIPTION,
                    children: ed.intl.format(e.isGuildStageVoice() ? ed.t.OqZI8P : ed.t["8yb3JS"], {}),
                }),
            ],
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
                    value: e.id,
                }))).unshift({
                label: ed.intl.string(ed.t.JEmsam),
                value: eR,
            });
        let a = null != (t = e.rtcRegion) ? t : eR;
        return (0, i.jsxs)(w.Z, {
            direction: w.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)(m.vwX, { children: ed.intl.string(ed.t.Ms8bX1) }),
                (0, i.jsx)(m.q4e, {
                    options: s,
                    value: a,
                    onChange: this.handleRegionChange,
                    isDisabled: !l,
                }),
                (0, i.jsx)(m.R94, {
                    type: m.geA.DESCRIPTION,
                    children: ed.intl.string(ed.t["dbTs+/"]),
                }),
            ],
        });
    }
    renderJuiceImage(e) {
        let t,
            { theme: l } = this.props;
        return (
            (t =
                e.type === er.d4z.GUILD_CATEGORY
                    ? (0, p.wj)(l)
                        ? n(309095)
                        : n(925442)
                    : (0, p.wj)(l)
                      ? n(316491)
                      : n(301358)),
            (0, i.jsx)(w.Z, {
                justify: w.Z.Justify.CENTER,
                className: eh.marginTop60,
                children: (0, i.jsx)("img", {
                    alt: "",
                    width: 280,
                    height: 165,
                    src: t,
                }),
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: n } = this.props;
        return null == e || null == t || null == n
            ? null
            : (0, i.jsxs)(m.hjN, {
                  className: "channel-settings-overview",
                  tag: m.RB0.H1,
                  title: ed.intl.string(ed.t["/dp6yc"]),
                  children: [
                      this.renderChannelInfo(e, t),
                      this.showVoiceSettings() ? (0, i.jsx)(m.izJ, { gap: 24 }) : null,
                      this.renderVoiceBitrate(e, n),
                      this.renderVideoQualityMode(e),
                      this.renderUserLimit(e),
                      this.renderRegionOverride(e),
                      this.renderJuiceImage(e),
                  ],
              });
    }
    handleSubmit() {
        return new Promise((e) => {
            e({
                shouldClear: !1,
                shouldRefocus: !0,
            });
        });
    }
    constructor(e) {
        var t, n;
        super(e),
            eg(this, "defaultReactionButtonRef", l.createRef()),
            eg(this, "nameInputRef", l.createRef()),
            eg(this, "cursorPosition", 0),
            eg(this, "renderEmojiPicker", (e) => {
                let { closePopout: t } = e,
                    { channel: n } = this.props;
                return (0, i.jsx)(_.Z, {
                    guildId: null == n ? void 0 : n.guild_id,
                    closePopout: t,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        this.handleChangeDefaultReactionEmoji(n), i && t();
                    },
                    pickerIntention: ea.Hz.COMMUNITY_CONTENT,
                    channel: n,
                    analyticsOverride: ew,
                });
            }),
            eg(this, "handleRequireTagChanged", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, $.mB)(t.flags, es.zZ.REQUIRE_TAG, e);
                (0, f.pW)({ flags: n });
            }),
            eg(this, "handleChangeName", (e) => {
                var t, n;
                let { channel: i } = this.props;
                if (null == i) return;
                i.isThread() ? (e = (0, B.Z)(e, !1)) : er.TPd.LIMITED_CHANNEL_NAME.has(i.type) && (e = (0, Y.Nj)(e));
                let l = null != (n = null == (t = this.nameInputRef.current) ? void 0 : t.selectionStart) ? n : 0;
                (0, f.pW)({ name: e }),
                    setTimeout(() => {
                        var e;
                        null == (e = this.nameInputRef.current) || e.setSelectionRange(l, l);
                    }, 0);
            }),
            eg(this, "handleBlurName", () => {
                let { channel: e, channelName: t } = this.props;
                if ((null == e ? void 0 : e.isThread()) && null != t) {
                    let e = (0, B.Z)(t, !0);
                    e !== t && (0, f.pW)({ name: e });
                }
            }),
            eg(this, "insertEmojiAtPosition", (e) => {
                var t, n;
                let i = this.nameInputRef.current,
                    l = null != (t = null == i ? void 0 : i.selectionStart) ? t : 0,
                    r = null != (n = null == i ? void 0 : i.selectionEnd) ? n : 0,
                    s = this.props.channelName,
                    a = (null == s ? void 0 : s.substring(0, l)) + e + (null == s ? void 0 : s.substring(r));
                (0, f.pW)({ name: a }),
                    setTimeout(() => {
                        let t = l + e.length;
                        null == i || i.focus(), null == i || i.setSelectionRange(t, t);
                    }, 0);
            }),
            eg(this, "handleChangeTopic", (e) => {
                (0, f.pW)({ topic: P.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            eg(this, "handleChangeRichTopic", (e, t, n) => {
                this.setState({
                    textTopicValue: t,
                    richTopicValue: n,
                }),
                    this.handleChangeTopic(t);
            }),
            eg(this, "handleChangeTemplate", (e) => {
                (0, f.pW)({ template: P.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            eg(this, "handleChangeDefaultReactionEmoji", (e) => {
                let t =
                    null == e
                        ? null
                        : (null == e ? void 0 : e.id) != null
                          ? {
                                emojiId: e.id,
                                emojiName: void 0,
                            }
                          : {
                                emojiId: void 0,
                                emojiName: e.optionallyDiverseSequence,
                            };
                (0, f.pW)({ defaultReactionEmoji: t });
            }),
            eg(this, "handleChangeDefaultForumLayout", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, f.pW)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e);
            }),
            eg(this, "handleChangeDefaultSortOrder", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, f.pW)({ defaultSortOrder: e });
            }),
            eg(this, "handleChangeDefaultTagSetting", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, f.pW)({ defaultTagSetting: e });
            }),
            eg(this, "handleChangeBitrate", (e) => {
                (0, f.pW)({ bitrate: 1000 * Math.round(e / 1000) });
            }),
            eg(this, "handleUserLimitChange", (e) => {
                (0, f.pW)({ userLimit: Math.round(e) });
            }),
            eg(this, "handleNSFWChange", (e) => {
                (0, f.pW)({ nsfw: e });
            }),
            eg(this, "handleActiveChannelsRemovedChange", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, $.mB)(t.flags, es.zZ.ACTIVE_CHANNELS_REMOVED, !e);
                (0, f.pW)({ flags: n });
            }),
            eg(this, "handleNewsChange", (e) => {
                (0, f.pW)({ type: e ? er.d4z.GUILD_ANNOUNCEMENT : er.d4z.GUILD_TEXT });
            }),
            eg(this, "handleChangeSlowmode", (e) => {
                (0, f.pW)({ rateLimitPerUser: e });
            }),
            eg(this, "handleChangeThreadMessageSlowmode", (e) => {
                (0, f.pW)({ defaultThreadRateLimitPerUser: e });
            }),
            eg(this, "handleChangeDefaultAutoArchiveDuration", (e) => {
                (0, f.pW)({ defaultAutoArchiveDuration: e });
            }),
            eg(this, "handleRegionChange", (e) => {
                (0, f.pW)({ rtcRegion: e === eR ? null : e });
            }),
            eg(this, "handleVideoQualityModeChange", (e) => {
                (0, f.pW)({ videoQualityMode: e });
            }),
            eg(this, "handleAutoArchiveDurationChanged", (e) => {
                (0, f.pW)({ autoArchiveDuration: e });
            }),
            eg(this, "handleInvitableChanged", (e) => {
                (0, f.pW)({ invitable: e });
            }),
            eg(this, "handleChannelSummariesToggled", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, $.mB)(t.flags, es.zZ.SUMMARIES_DISABLED, !e);
                (0, f.pW)({ flags: n });
            }),
            eg(this, "handleShowMediaOptionsToggled", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, $.mB)(t.flags, es.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                (0, f.pW)({ flags: n });
            });
        let r = null != (n = null == (t = this.props.channel) ? void 0 : t.topic) ? n : "";
        this.state = {
            textTopicValue: r,
            richTopicValue: (0, E.JM)(r),
            topicFocused: !1,
            updateNameInputCursorPosition: !1,
        };
    }
}
function eL() {
    let { errors: e, channel: t, submitting: n, subsection: r } = (0, h.cj)([F.Z], () => F.Z.getProps()),
        s = (0, h.e7)([q.Z], () => {
            var e;
            return q.Z.getRegions(null != (e = null == t ? void 0 : t.getGuildId()) ? e : null);
        }),
        a = (0, h.e7)([V.Z], () => V.Z.theme),
        o = (0, h.e7)([z.Z], () => z.Z.getGuild(null == t ? void 0 : t.getGuildId())),
        c = (0, k.C7)(t),
        d = (0, k.Xb)(t),
        { canManageChannels: u, canSendMessages: g } = (0, h.cj)([X.Z], () => ({
            canManageChannels: X.Z.can(er.Plq.MANAGE_CHANNELS, t),
            canSendMessages: X.Z.can(er.Plq.SEND_MESSAGES, t),
        })),
        p = (0, N.ZP)(t),
        m = W.default.getId(),
        f = (0, A.v)(),
        b = null == t ? void 0 : t.id,
        x = (0, y.ts)(t, !1, !0),
        j = v.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: "ChannelSettingsOverview",
        }).enabled,
        C = l.useCallback(
            (e) => {
                null != b && f.getState().setLayoutType(b, e);
            },
            [b, f],
        );
    return (0, i.jsx)(eA, {
        errors: e,
        channel: t,
        channelName: p,
        submitting: n,
        regions: s,
        theme: a,
        guild: o,
        canManageChannels: (null == t ? void 0 : t.isThread()) ? c : u,
        canSendMessages: g,
        isThreadModerator: d,
        canManageThread: c,
        subsection: r,
        isForumPost: null != t && t.isForumPost(),
        isOwner: null == t ? void 0 : t.isOwner(m),
        handleSetDefaultLayout: C,
        showChannelSummariesSettings: x,
        showAdvancedSlowModeSetting: j,
    });
}
