n.d(t, {
    G: () => eS,
    Z: () => eZ,
}),
    n(997841),
    n(290780);
var i = n(54381),
    l = n(473749),
    r = n(120356),
    s = n.n(r),
    a = n(913527),
    o = n.n(a),
    c = n(313361),
    d = n(697988),
    u = n(683860),
    h = n(95015),
    g = n(442837),
    p = n(796027),
    m = n(780384),
    f = n(481060),
    b = n(787014),
    x = n(771340),
    j = n(410575),
    v = n(129865),
    y = n(902840),
    C = n(622822),
    S = n(933557),
    N = n(541716),
    O = n(752305),
    Z = n(893718),
    E = n(409513),
    w = n(600164),
    T = n(313201),
    _ = n(318766),
    R = n(907040),
    P = n(906411),
    I = n(633302),
    L = n(109434),
    M = n(162389),
    A = n(946458),
    D = n(968437),
    k = n(665906),
    B = n(456077),
    H = n(747212),
    U = n(210887),
    G = n(131704),
    V = n(601964),
    W = n(314897),
    F = n(388610),
    z = n(430824),
    q = n(496675),
    Y = n(903223),
    J = n(594174),
    X = n(934415),
    Q = n(55935),
    K = n(70956),
    $ = n(63063),
    ee = n(129724),
    et = n(732335),
    en = n(296146),
    ei = n(564735),
    el = n(981631),
    er = n(176505),
    es = n(185923),
    ea = n(710352),
    eo = n(124368),
    ec = n(388032),
    ed = n(257294),
    eu = n(197571);
function eh(e, t, n) {
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
function eg(e) {
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
                eh(e, t, n[t]);
            });
    }
    return e;
}
function ep(e, t) {
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
let em = (0, T.hQ)(),
    ef = (0, T.hQ)(),
    eb = (0, T.hQ)(),
    ex = (0, G.createChannelRecord)({
        id: "1",
        type: el.d4z.DM,
    }),
    ej = {
        popoutLocation: {
            page: el.ZY5.CHANNEL_SETTINGS,
            section: el.jXE.CHANNEL_DEFAULT_REACTION,
            object: el.qAy.EMOJI_PICKER_BUTTON,
        },
    },
    ev = {
        popoutLocation: {
            page: el.ZY5.CHANNEL_SETTINGS,
            section: el.jXE.CHANNEL_NAME,
            object: el.qAy.EMOJI_PICKER_BUTTON,
        },
    },
    ey = "AUTOMATIC_RTC_REGION",
    eC = {
        breakingChangeDate: (0, Q.vc)(o()(el.zQD), "LL"),
        helpCenterLink: $.Z.getArticleURL(el.BhN.SLOWMODE),
    },
    eS = g.ZP.connectStores([F.Z], () => {
        let { channel: e, submitting: t } = F.Z.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, b.S1)(e.id);
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
                    availableTags: f,
                    defaultSortOrder: x,
                    defaultForumLayout: j,
                    defaultTagSetting: v,
                } = e;
                e.isThread() && (t = (0, B.Z)(t, !0)),
                    (0, b.wk)(e.id, {
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
                        availableTags: f,
                        defaultSortOrder: x,
                        defaultForumLayout: j,
                        defaultTagSetting: v,
                    });
            },
        };
    })(p.Z);
function eN(e) {
    let { onEmojiPicked: t, channel: n, guildId: r } = e,
        s = l.useRef(null),
        a = l.useCallback(
            (e) => {
                let { closePopout: l } = e;
                return (0, i.jsx)(R.Z, {
                    channel: n,
                    guildId: r,
                    pickerIntention: es.Hz.CHANNEL_NAME,
                    closePopout: l,
                    onNavigateAway: l,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        null != n && n.type === P.B.UNICODE && t(n.surrogates), i && l();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: ev,
                });
            },
            [n, r, t],
        );
    return (0, i.jsx)(f.yRy, {
        targetElementRef: s,
        renderPopout: a,
        animation: f.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(
                _.Z,
                ep(eg({}, e), {
                    ref: s,
                    active: n,
                    className: ed.emojiButton,
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
class eO extends l.PureComponent {
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && x.Z.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        var t, n, i, l;
        let r = null != (i = null == (t = this.props.channel) ? void 0 : t.topic) ? i : "";
        (null != (l = null == (n = e.channel) ? void 0 : n.topic) ? l : "") !== r &&
            r !== this.state.textTopicValue &&
            this.setState({
                textTopicValue: r,
                richTopicValue: (0, O.JM)(r),
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
                ? ec.intl.format(ec.t.EIQq9v, eC)
                : ec.intl.string(ec.t["a+1pdO"])
            : (null == t ? void 0 : t.isThread())
              ? e
                  ? ec.intl.format(ec.t["8sTC8t"], eC)
                  : ec.intl.string(ec.t.OMmNCv)
              : e
                ? ec.intl.format(ec.t.wW2MWu, eC)
                : ec.intl.string(ec.t["HEA/DU"]);
    }
    getCooldownSliderMarker(e) {
        return (0, ee.A)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, ee.A)(e * K.Z.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        var n, l, r, a, o, h, g;
        let p,
            m,
            {
                canManageChannels: b,
                canSendMessages: x,
                isThreadModerator: v,
                canManageThread: y,
                guild: S,
                isForumPost: O,
                isOwner: w,
                showAdvancedSlowModeSetting: T,
            } = this.props,
            _ = G.Ec.has(e.type),
            R = e.isForumLikeChannel(),
            P = R && (null == (n = e.availableTags) ? void 0 : n.every((e) => e.moderated)),
            L = (null == (l = J.default.getCurrentUser()) ? void 0 : l.isStaff()) === !0,
            k = G.TK.has(e.type)
                ? (0, i.jsx)(f.gNt, {
                      label: R ? ec.intl.string(ec.t.yR6HwZ) : ec.intl.string(ec.t.X8jMDh),
                      children: (0, i.jsx)(Z.ZP, {
                          className: s()(ed.topicContainer, { [ed.disabled]: !b }),
                          innerClassName: s()(ed.topic, { [ed.disabled]: !b }),
                          characterCountClassName: ed.topicCharacterCount,
                          maxCharacterCount: R ? er.Z7 : er.$x,
                          onChange: this.handleChangeRichTopic,
                          placeholder: ec.intl.string(ec.t["71fbmh"]),
                          channel: ex,
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
                          error: this.getError("topic"),
                          disabled: !b,
                          showValueWhenDisabled: !0,
                      }),
                  })
                : null,
            B =
                R && L
                    ? (0, i.jsx)(f.Kx8, {
                          label: ec.intl.string(ec.t.qk2jdY),
                          placeholder: ec.intl.string(ec.t.DDjD1H),
                          value: I.ZP.translateSurrogatesToInlineEmoji(null != (a = e.template) ? a : ""),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: ea.Vb,
                          disabled: !b,
                          autosize: !0,
                          showCharacterCount: !0,
                      })
                    : null,
            U = e.isForumLikeChannel()
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(f.izJ, {}),
                          (0, i.jsx)(f.gNt, {
                              label: ec.intl.string(ec.t["P/y+sj"]),
                              description: ec.intl.string(ec.t["/oQQ3y"]),
                              errorMessage: this.getError("available_tags"),
                              id: em,
                              children: (0, i.jsx)(M.Z, { channel: e }),
                          }),
                          (0, i.jsx)(f.Checkbox, {
                              disabled: !b || P,
                              checked: e.hasFlag(er.zZ.REQUIRE_TAG),
                              onChange: (e) => this.handleRequireTagChanged(e),
                              label: ec.intl.string(ec.t["9g2Zyv"]),
                          }),
                      ],
                  })
                : null,
            W = e.isForumLikeChannel()
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(f.izJ, {}),
                          (0, i.jsx)(f.gNt, {
                              label: ec.intl.string(ec.t["8ao1+E"]),
                              description: ec.intl.string(ec.t.SdbF0q),
                              children: (0, i.jsxs)("div", {
                                  className: ed.twoColumnSettings,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: s()(ed.settingsLeft, ed.settingsDefaultReaction),
                                          children: (0, i.jsxs)(f.ButtonGroup, {
                                              align: "center",
                                              children: [
                                                  (0, i.jsx)(f.yRy, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: "right",
                                                      animation: f.yRy.Animation.NONE,
                                                      align: "center",
                                                      children: (e) =>
                                                          (0, i.jsx)(
                                                              f.Button,
                                                              ep(eg({}, e), {
                                                                  buttonRef: this.defaultReactionButtonRef,
                                                                  text: ec.intl.string(ec.t["59QgaD"]),
                                                                  disabled: !b,
                                                                  onClick: (t) => {
                                                                      var n;
                                                                      null == (n = e.onClick) || n.call(e, t);
                                                                  },
                                                              }),
                                                          ),
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, i.jsx)(f.Avr, {
                                                            text: ec.intl.string(ec.t.N86XcP),
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            variant: "critical",
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      }),
                                      (0, i.jsx)(A.Z, { reactionEmoji: e.defaultReactionEmoji }),
                                  ],
                              }),
                          }),
                      ],
                  })
                : null,
            F = e.isForumChannel()
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(f.izJ, {}),
                          (0, i.jsxs)("div", {
                              className: ed.twoColumnSettings,
                              children: [
                                  (0, i.jsx)("div", {
                                      className: s()(ed.settingsLeft, ed.settingsDefaultView),
                                      children: (0, i.jsx)(f.q4e, {
                                          label: ec.intl.string(ec.t["kQvoC/"]),
                                          description: ec.intl.string(ec.t.mOSViT),
                                          options: [
                                              {
                                                  label: ec.intl.string(ec.t["4HXEZG"]),
                                                  value: c.X.LIST,
                                              },
                                              {
                                                  label: ec.intl.string(ec.t["8RswJG"]),
                                                  value: c.X.GRID,
                                              },
                                          ],
                                          value: null != (o = e.defaultForumLayout) ? o : c.X.LIST,
                                          onChange: this.handleChangeDefaultForumLayout,
                                      }),
                                  }),
                                  e.defaultForumLayout === c.X.GRID
                                      ? (0, i.jsx)(en.Z, { className: ed.defaultImageView })
                                      : (0, i.jsx)(ei.Z, { className: ed.defaultImageView }),
                              ],
                          }),
                          (0, i.jsx)(f.izJ, {}),
                      ],
                  })
                : null,
            z = e.isForumLikeChannel()
                ? (0, i.jsx)(f.q4e, {
                      label: ec.intl.string(ec.t.gePre2),
                      description: ec.intl.string(ec.t["165cVX"]),
                      options: [
                          {
                              label: ec.intl.string(ec.t.ElZtzj),
                              value: u.z.LATEST_ACTIVITY,
                          },
                          {
                              label: ec.intl.string(ec.t.w28f3F),
                              value: u.z.CREATION_DATE,
                          },
                      ],
                      value: e.getDefaultSortOrder(),
                      onChange: this.handleChangeDefaultSortOrder,
                  })
                : null,
            q = e.isForumLikeChannel()
                ? (0, i.jsx)(f.q4e, {
                      label: ec.intl.string(ec.t.Paxaug),
                      description: ec.intl.string(ec.t.DqOl8J),
                      options: [
                          {
                              label: ec.intl.string(ec.t.rQ0ctQ),
                              value: d.z.MATCH_SOME,
                          },
                          {
                              label: ec.intl.string(ec.t.FCXUu0),
                              value: d.z.MATCH_ALL,
                          },
                      ],
                      value: e.getDefaultTagSetting(),
                      onChange: this.handleChangeDefaultTagSetting,
                  })
                : null,
            Y = _ ? v : b,
            X =
                null ==
                (r = E.Z.getCurrentConfig({
                    guildId: e.guild_id,
                    location: "ChannelSettingsOverview",
                }))
                    ? void 0
                    : r.enabled,
            Q =
                !0 === T
                    ? (0, i.jsx)(et.Z, {
                          label: ec.intl.string(ec.t.tTHx98),
                          helperText: this.getSlowmodeHelpText(X),
                          channel: e,
                          onChange: this.handleChangeSlowmode,
                      })
                    : (0, i.jsx)(f.iRW, {
                          label: ec.intl.string(ec.t.tTHx98),
                          helperText: this.getSlowmodeHelpText(X),
                          initialValue: e.rateLimitPerUser,
                          markers: el.BiE,
                          stickToMarkers: !0,
                          onValueChange: this.handleChangeSlowmode,
                          onMarkerRender: this.getCooldownSliderMarker,
                          disabled: !Y,
                          equidistant: !0,
                          "aria-labelledby": ef,
                          "aria-describedby": eb,
                      }),
            K = G.X_.has(e.type)
                ? R
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(f.izJ, {}),
                              (0, i.jsxs)(f.C3N, {
                                  label: ec.intl.string(ec.t.O1c02q),
                                  children: [
                                      Q,
                                      (0, i.jsx)(f.iRW, {
                                          label: ec.intl.string(ec.t["fkY5+l"]),
                                          helperText: X ? ec.intl.format(ec.t.nZSuEj, eC) : ec.intl.string(ec.t.kdZU6H),
                                          initialValue: null != (h = e.defaultThreadRateLimitPerUser) ? h : 0,
                                          markers: el.BiE,
                                          stickToMarkers: !0,
                                          onValueChange: this.handleChangeThreadMessageSlowmode,
                                          onMarkerRender: this.getCooldownSliderMarker,
                                          disabled: !Y,
                                          equidistant: !0,
                                          "aria-labelledby": ef,
                                          "aria-describedby": eb,
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(f.izJ, {}),
                          ],
                      })
                    : Q
                : null,
            ee =
                _ && null != e.threadMetadata
                    ? (0, i.jsx)(j.Z, {
                          page: el.ZY5.CHANNEL_SETTINGS,
                          children: (0, i.jsx)(H.Z, {
                              isDisabled: !y,
                              autoArchiveDuration: null != (g = e.threadMetadata.autoArchiveDuration) ? g : eo.AX,
                              onChange: this.handleAutoArchiveDurationChanged,
                              helperText: O ? ec.intl.string(ec.t["3aJN9M"]) : ec.intl.string(ec.t.YUXr4Z),
                          }),
                      })
                    : null,
            es =
                e.type === el.d4z.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, i.jsx)("div", {
                          children: (0, i.jsx)(f.rsf, {
                              label: ec.intl.string(ec.t.s2rpNf),
                              description: ec.intl.string(ec.t.cSyXJk),
                              checked: e.threadMetadata.invitable,
                              onChange: this.handleInvitableChanged,
                              disabled: !y,
                          }),
                      })
                    : null,
            eu = null != S && (0, V.Y2)(S),
            eh = G.ov.has(e.type)
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(f.rsf, {
                              label: ec.intl.string(ec.t.Es25Yf),
                              description: ec.intl.string(ec.t["9eUgwR"]),
                              onChange: this.handleNSFWChange,
                              checked: (0, C.qF)(e),
                              disabled: !b || null != e.linkedLobby || eu,
                          }),
                          null != e.linkedLobby
                              ? (0, i.jsx)(f.Wn, {
                                    messageType: f.QYI.WARNING,
                                    children: ec.intl.string(ec.t.l6uSVa),
                                })
                              : null,
                      ],
                  })
                : null,
            ej =
                G.Y0.has(e.type) &&
                null != S &&
                S.features.has(el.GuildFeatures.NEWS) &&
                e.id !== (null == S ? void 0 : S.rulesChannelId) &&
                e.id !== (null == S ? void 0 : S.publicUpdatesChannelId)
                    ? (0, i.jsxs)(f.Kqy, {
                          gap: 4,
                          children: [
                              (0, i.jsx)(f.rsf, {
                                  label: ec.intl.string(ec.t.Au2b7m),
                                  description: ec.intl.format(ec.t.tI7KNX, {
                                      documentationLink: $.Z.getArticleURL(el.BhN.ANNOUNCEMENT_CHANNELS),
                                  }),
                                  onChange: this.handleNewsChange,
                                  checked: e.type === el.d4z.GUILD_ANNOUNCEMENT,
                                  disabled: !b,
                              }),
                              (0, i.jsx)(f.Wn, {
                                  messageType: f.QYI.INFO,
                                  children: ec.intl.string(ec.t["2Ab4Id"]),
                              }),
                          ],
                      })
                    : null,
            ev = G.uC.has(e.type)
                ? (0, i.jsx)(j.Z, {
                      page: el.ZY5.CHANNEL_SETTINGS,
                      children: (0, i.jsx)(H.Z, {
                          isDisabled: !b,
                          autoArchiveDuration: (0, D.WD)(e, null),
                          onChange: this.handleChangeDefaultAutoArchiveDuration,
                          helperText: e.isForumLikeChannel()
                              ? ec.intl.string(ec.t.fyXclY)
                              : ec.intl.string(ec.t.W3Noi9),
                      }),
                  })
                : null,
            ey = this.props.showChannelSummariesSettings
                ? (0, i.jsx)(f.rsf, {
                      label: ec.intl.string(ec.t.id3ozj),
                      description: ec.intl.format(ec.t.feJW1z, {
                          helpdeskArticle: $.Z.getArticleURL(el.BhN.CONVERSATION_SUMMARIES),
                      }),
                      badge: "beta",
                      onChange: this.handleChannelSummariesToggled,
                      checked:
                          !e.hasFlag(er.zZ.SUMMARIES_DISABLED) &&
                          (null == S ? void 0 : S.features.has(el.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
                      disabled:
                          !b || !(null == S ? void 0 : S.features.has(el.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
                  })
                : null,
            eS = e.isMediaChannel()
                ? (0, i.jsx)(f.rsf, {
                      label: ec.intl.string(ec.t.u8LZOt),
                      description: ec.intl.string(ec.t.J4wCc7),
                      checked: !e.hasFlag(er.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      onChange: this.handleShowMediaOptionsToggled,
                      disabled: !b,
                  })
                : null;
        e.type === el.d4z.GUILD_CATEGORY
            ? ((m = ec.intl.string(ec.t.OCAkGP)), (p = "category-name"))
            : e.isForumPost()
              ? ((m = ec.intl.string(ec.t.uyVrTN)), (p = "post-title"))
              : _
                ? ((m = ec.intl.string(ec.t.j3XWjD)), (p = "thread-name"))
                : ((m = ec.intl.string(ec.t.PVbHDl)), (p = "channel-name"));
        let eO = w ? x : b;
        return (0, i.jsxs)(f.Kqy, {
            gap: 24,
            children: [
                (0, i.jsx)(f.oil, {
                    label: m,
                    fullWidth: !0,
                    inputRef: this.nameInputRef,
                    value: t,
                    onChange: this.handleChangeName,
                    onBlur: this.handleBlurName,
                    error: this.getError("name"),
                    name: p,
                    autoFocus: !0,
                    disabled: !eO,
                    maxLength: el.HN8,
                    trailing: eO
                        ? {
                              type: "emoji",
                              button: (0, i.jsx)(eN, {
                                  onEmojiPicked: this.insertEmojiAtPosition,
                                  channel: e,
                                  guildId: null == e ? void 0 : e.guild_id,
                              }),
                          }
                        : void 0,
                }),
                k,
                B,
                U,
                W,
                K,
                ee,
                F,
                z,
                q,
                es,
                eh,
                ej,
                ey,
                ev,
                eS,
            ],
        });
    }
    renderBitrate(e) {
        return "".concat(Math.round(e / 1000), "kbps");
    }
    renderVoiceBitrate(e, t) {
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let l = (0, X.g7)(t, e),
            r = this.getError("bitrate");
        return (0, i.jsx)(f.iRW, {
            label: ec.intl.string(ec.t.w2d0vU),
            errorMessage: "" !== r ? r : void 0,
            helperText: l > el.epw ? ec.intl.format(ec.t.SbQJk5, { bitrate: el.epw / 1000 }) : void 0,
            initialValue: Math.min(e.bitrate, l),
            onValueChange: this.handleChangeBitrate,
            onValueRender: this.renderBitrate,
            onMarkerRender: this.renderBitrate,
            markers: [el.Fc, el.epw, l],
            minValue: el.Fc,
            maxValue: l,
            keyboardStep: el.V7H,
            disabled: !n,
        });
    }
    showVoiceSettings() {
        let { channel: e } = this.props;
        return (
            null != e &&
            null != e.guild_id &&
            G.vg.has(e.type) &&
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
                value: el.Ucd.AUTO,
                name: ec.intl.string(ec.t.jjKYpu),
            },
            {
                value: el.Ucd.FULL,
                name: ec.intl.string(ec.t["7jOoJE"]),
            },
        ];
        return (0, i.jsx)(f.FXm, {
            label: ec.intl.string(ec.t.jhJEJs),
            helperText: ec.intl.format(ec.t.c5W7Ss, {}),
            onChange: (e) => this.handleVideoQualityModeChange(e),
            options: l,
            value: null != (t = e.videoQualityMode) ? t : el.Ucd.AUTO,
            disabled: !n,
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e))
            ? ec.intl.string(ec.t.XX5ciX)
            : ec.intl.formatToPlainString(ec.t["3uHFUR"], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError("user_limit"),
            l = e.isGuildStageVoice() ? el.xGv : el.$pe;
        return (0, i.jsx)(f.iRW, {
            label: ec.intl.string(ec.t["/AoSGN"]),
            errorMessage: "" !== n ? n : void 0,
            helperText: ec.intl.format(e.isGuildStageVoice() ? ec.t.OqZI8D : ec.t["8yb3JT"], {}),
            initialValue: Math.min(e.userLimit, l),
            onValueChange: this.handleUserLimitChange,
            onValueRender: this.onRenderUserLimit,
            onMarkerRender: (e) => (0 === Math.round(e) ? "\u221E" : e),
            markers: [0, l],
            minValue: 0,
            maxValue: l,
            disabled: !t,
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
                label: ec.intl.string(ec.t.JEmsap),
                value: ey,
            });
        let a = null != (t = e.rtcRegion) ? t : ey;
        return (0, i.jsx)(f.q4e, {
            label: ec.intl.string(ec.t["Ms8bX+"]),
            description: ec.intl.string(ec.t["dbTs+z"]),
            options: s,
            value: a,
            onChange: this.handleRegionChange,
            isDisabled: !l,
        });
    }
    renderJuiceImage(e) {
        let t,
            { theme: l } = this.props;
        return (
            (t =
                e.type === el.d4z.GUILD_CATEGORY
                    ? (0, m.wj)(l)
                        ? n(309095)
                        : n(925442)
                    : (0, m.wj)(l)
                      ? n(316491)
                      : n(301358)),
            (0, i.jsx)(w.Z, {
                justify: w.Z.Justify.CENTER,
                className: eu.marginTop60,
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
            : (0, i.jsxs)(f.C3N, {
                  label: ec.intl.string(ec.t["/dp6yY"]),
                  children: [
                      this.renderChannelInfo(e, t),
                      this.showVoiceSettings() ? (0, i.jsx)(f.izJ, { gap: 24 }) : null,
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
            eh(this, "defaultReactionButtonRef", l.createRef()),
            eh(this, "nameInputRef", l.createRef()),
            eh(this, "cursorPosition", 0),
            eh(this, "renderEmojiPicker", (e) => {
                let { closePopout: t } = e,
                    { channel: n } = this.props;
                return (0, i.jsx)(R.Z, {
                    guildId: null == n ? void 0 : n.guild_id,
                    closePopout: t,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        this.handleChangeDefaultReactionEmoji(n), i && t();
                    },
                    pickerIntention: es.Hz.COMMUNITY_CONTENT,
                    channel: n,
                    analyticsOverride: ej,
                });
            }),
            eh(this, "handleRequireTagChanged", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, h.mB)(t.flags, er.zZ.REQUIRE_TAG, e);
                (0, b.pW)({ flags: n });
            }),
            eh(this, "handleChangeName", (e) => {
                var t, n;
                let { channel: i } = this.props;
                if (null == i) return;
                i.isThread() ? (e = (0, B.Z)(e, !1)) : el.TPd.LIMITED_CHANNEL_NAME.has(i.type) && (e = (0, X.Nj)(e));
                let l = null != (n = null == (t = this.nameInputRef.current) ? void 0 : t.selectionStart) ? n : 0;
                (0, b.pW)({ name: e }),
                    setTimeout(() => {
                        var e;
                        null == (e = this.nameInputRef.current) || e.setSelectionRange(l, l);
                    }, 0);
            }),
            eh(this, "handleBlurName", () => {
                let { channel: e, channelName: t } = this.props;
                if ((null == e ? void 0 : e.isThread()) && null != t) {
                    let e = (0, B.Z)(t, !0);
                    e !== t && (0, b.pW)({ name: e });
                }
            }),
            eh(this, "insertEmojiAtPosition", (e) => {
                var t, n;
                let i = this.nameInputRef.current,
                    l = null != (t = null == i ? void 0 : i.selectionStart) ? t : 0,
                    r = null != (n = null == i ? void 0 : i.selectionEnd) ? n : 0,
                    s = this.props.channelName,
                    a = (null == s ? void 0 : s.substring(0, l)) + e + (null == s ? void 0 : s.substring(r));
                (0, b.pW)({ name: a }),
                    setTimeout(() => {
                        let t = l + e.length;
                        null == i || i.focus(), null == i || i.setSelectionRange(t, t);
                    }, 0);
            }),
            eh(this, "handleChangeTopic", (e) => {
                (0, b.pW)({ topic: I.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            eh(this, "handleChangeRichTopic", (e, t, n) => {
                this.setState({
                    textTopicValue: t,
                    richTopicValue: n,
                }),
                    this.handleChangeTopic(t);
            }),
            eh(this, "handleChangeTemplate", (e) => {
                (0, b.pW)({ template: I.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            eh(this, "handleChangeDefaultReactionEmoji", (e) => {
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
                (0, b.pW)({ defaultReactionEmoji: t });
            }),
            eh(this, "handleChangeDefaultForumLayout", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, b.pW)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e);
            }),
            eh(this, "handleChangeDefaultSortOrder", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, b.pW)({ defaultSortOrder: e });
            }),
            eh(this, "handleChangeDefaultTagSetting", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, b.pW)({ defaultTagSetting: e });
            }),
            eh(this, "handleChangeBitrate", (e) => {
                (0, b.pW)({ bitrate: 1000 * Math.round(e / 1000) });
            }),
            eh(this, "handleUserLimitChange", (e) => {
                (0, b.pW)({ userLimit: Math.round(e) });
            }),
            eh(this, "handleNSFWChange", (e) => {
                (0, b.pW)({ nsfw: e });
            }),
            eh(this, "handleActiveChannelsRemovedChange", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, h.mB)(t.flags, er.zZ.ACTIVE_CHANNELS_REMOVED, !e);
                (0, b.pW)({ flags: n });
            }),
            eh(this, "handleNewsChange", (e) => {
                (0, b.pW)({ type: e ? el.d4z.GUILD_ANNOUNCEMENT : el.d4z.GUILD_TEXT });
            }),
            eh(this, "handleChangeSlowmode", (e) => {
                (0, b.pW)({ rateLimitPerUser: e });
            }),
            eh(this, "handleChangeThreadMessageSlowmode", (e) => {
                (0, b.pW)({ defaultThreadRateLimitPerUser: e });
            }),
            eh(this, "handleChangeDefaultAutoArchiveDuration", (e) => {
                (0, b.pW)({ defaultAutoArchiveDuration: e });
            }),
            eh(this, "handleRegionChange", (e) => {
                (0, b.pW)({ rtcRegion: e === ey ? null : e });
            }),
            eh(this, "handleVideoQualityModeChange", (e) => {
                (0, b.pW)({ videoQualityMode: e });
            }),
            eh(this, "handleAutoArchiveDurationChanged", (e) => {
                (0, b.pW)({ autoArchiveDuration: e });
            }),
            eh(this, "handleInvitableChanged", (e) => {
                (0, b.pW)({ invitable: e });
            }),
            eh(this, "handleChannelSummariesToggled", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, h.mB)(t.flags, er.zZ.SUMMARIES_DISABLED, !e);
                (0, b.pW)({ flags: n });
            }),
            eh(this, "handleShowMediaOptionsToggled", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, h.mB)(t.flags, er.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                (0, b.pW)({ flags: n });
            });
        let r = null != (n = null == (t = this.props.channel) ? void 0 : t.topic) ? n : "";
        this.state = {
            textTopicValue: r,
            richTopicValue: (0, O.JM)(r),
            topicFocused: !1,
            updateNameInputCursorPosition: !1,
        };
    }
}
function eZ() {
    let { errors: e, channel: t, submitting: n, subsection: r } = (0, g.cj)([F.Z], () => F.Z.getProps()),
        s = (0, g.e7)([Y.Z], () => {
            var e;
            return Y.Z.getRegions(null != (e = null == t ? void 0 : t.getGuildId()) ? e : null);
        }),
        a = (0, g.e7)([U.Z], () => U.Z.theme),
        o = (0, g.e7)([z.Z], () => z.Z.getGuild(null == t ? void 0 : t.getGuildId())),
        c = (0, k.C7)(t),
        d = (0, k.Xb)(t),
        { canManageChannels: u, canSendMessages: h } = (0, g.cj)([q.Z], () => ({
            canManageChannels: q.Z.can(el.Plq.MANAGE_CHANNELS, t),
            canSendMessages: q.Z.can(el.Plq.SEND_MESSAGES, t),
        })),
        p = (0, S.ZP)(t),
        m = W.default.getId(),
        f = (0, L.v)(),
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
    return (0, i.jsx)(eO, {
        errors: e,
        channel: t,
        channelName: p,
        submitting: n,
        regions: s,
        theme: a,
        guild: o,
        canManageChannels: (null == t ? void 0 : t.isThread()) ? c : u,
        canSendMessages: h,
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
