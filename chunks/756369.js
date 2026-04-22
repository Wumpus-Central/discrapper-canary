n.d(t, { Ay: () => e6, OC: () => e7, iV: () => e9 }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(448761),
    o = n(665260),
    d = n(311907),
    c = n(803805),
    u = n(52133),
    m = n(640238),
    _ = n(834730),
    h = n(843472),
    p = n(488331),
    g = n(298481),
    A = n(121401),
    f = n(509282),
    x = n(909338),
    C = n(948729),
    E = n(150099),
    I = n(871751),
    v = n(510790),
    b = n(167189),
    T = n(175335),
    S = n(390248),
    y = n(282108),
    N = n(33358),
    j = n(704400),
    L = n(496376),
    R = n(795982),
    P = n(643612),
    w = n(613760),
    D = n(229527),
    k = n(870136),
    O = n(33525),
    M = n(484724),
    U = n(71755),
    G = n(21599),
    B = n(178879),
    F = n(118331),
    H = n(520586),
    V = n(857071),
    q = n(384231),
    W = n(46054),
    z = n(731068),
    Y = n(619517),
    Q = n(207133),
    K = n(480191),
    Z = n(269849),
    J = n(704413),
    X = n(695206),
    $ = n(892742),
    ee = n(376708),
    et = n(549527),
    en = n(302031),
    ei = n(899894),
    el = n(581034),
    ea = n(50777),
    es = n(378058),
    er = n(443642),
    eo = n(406704),
    ed = n(996522),
    ec = n(253932),
    eu = n(383233),
    em = n(961350),
    e_ = n(696451),
    eh = n(834942),
    ep = n(576705),
    eg = n(287809),
    eA = n(644447),
    ef = n(954571),
    ex = n(927813),
    eC = n(659674),
    eE = n(661191),
    eI = n(998218),
    ev = n(988012),
    eb = n(294520),
    eT = n(141468),
    eS = n(863439),
    ey = n(869938),
    eN = n(143413),
    ej = n(707985),
    eL = n(443228),
    eR = n(875033),
    eP = n(341645),
    ew = n(986350),
    eD = n(439401),
    ek = n(466802),
    eO = n(990560),
    eM = n(266620),
    eU = n(860227),
    eG = n(564107),
    eB = n(763899),
    eF = n(652176),
    eH = n(382807),
    eV = n(394839),
    eq = n(96782),
    eW = n(573163),
    ez = n(861986),
    eY = n(937266),
    eQ = n(343552),
    eK = n(581619),
    eZ = n(652215),
    eJ = n(985018),
    eX = n(416620);
let e$ = [eZ.Auw.GIFV],
    e0 = 15 * ex.A.Millis.MINUTE,
    e1 = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    e2 = (e) => () => {
        let { url: t, proxyUrl: n, width: l, height: a, flags: s } = e,
            r = (0, o.Lt)(s, z.e5.IS_ANIMATED);
        return null != l && null != a && (Y.bp.test(n) || (r && (Y.P8.test(n) || Y.p4.test(n))))
            ? (0, i.jsx)(eD.A, { width: l, height: a, src: n, url: t, format: c.TL.IMAGE, className: eX.jj })
            : null;
    };
class e9 extends l.Component {
    static defaultProps = { renderEmbeds: !0, compact: !1 };
    state = { showSuppressModal: !1, showRemoveAttachmentModal: !1, attachmentToDelete: null };
    getAcceptInviteContext = (e, t) => {
        let { channel: n, message: i } = this.props;
        return {
            location: e,
            location_guild_id: n.getGuildId(),
            location_channel_id: n.id,
            location_channel_type: n.type,
            location_message_id: i.id,
            ...(null != t ? { invite_instance_id: (0, G._U)(t, i.id) } : {}),
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e1.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: l, message: a, poll: s } = this.props,
            { channel: r, message: o, poll: d } = e;
        return (
            !(0, u.A)(this.state, t) ||
            !(0, u.A)(this.props, e, ["message", "channel"]) ||
            l.type !== r.type ||
            d !== s ||
            o.codedLinks !== a.codedLinks ||
            o.flags !== a.flags ||
            o.giftCodes !== a.giftCodes ||
            o.attachments !== a.attachments ||
            o.embeds !== a.embeds ||
            o.components !== a.components ||
            o.activity !== a.activity ||
            ((n = o.reactions) !== (i = a.reactions) &&
                (n.length !== i.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: l, burst_count: a } = e,
                            { emoji: s, count: r, burst_count: o } = i[t];
                        return a !== o || l !== r || n.id !== s.id || n.name !== s.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            l = null;
        switch (n) {
            case ev.xC.MARK_AS_FALSE_POSITIVE:
                l = (0, i.jsx)(L.A, { messageId: e.id, channelId: t.id });
                break;
            case ev.xC.AGE_VERIFICATION_RETRY:
                l = (0, i.jsx)(g.A, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, i.jsx)("div", { className: eX.od, children: l });
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: l, url: a } = t;
                  if (n === b.I.INVITE)
                      return this.shouldRenderInvite(l)
                          ? (0, i.jsx)(
                                eO.A,
                                { code: l, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                                l,
                            )
                          : null;
                  if (n === b.I.TEMPLATE) return (0, i.jsx)(U.A, { code: l }, l);
                  if (n === b.I.EVENT) return (0, i.jsx)(M.A, { code: l }, l);
                  if (n === b.I.CHANNEL_LINK) return (0, i.jsx)(eL.A, { code: l, message: e }, l);
                  if (n === b.I.APP_DIRECTORY_PROFILE) return (0, i.jsx)(w.A, { code: l, message: e }, l);
                  else if (n === b.I.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: s } = (0, x.N)(a);
                      return (0, i.jsx)(
                          p.A,
                          { applicationId: l, message: e, referrerId: t, customId: n, linkId: s },
                          l,
                      );
                  } else if (n === b.I.GUILD_PRODUCT) return (0, i.jsx)(O.A, { code: l }, l);
                  else if (n === b.I.SERVER_SHOP) return (0, i.jsx)(T.A, { guildId: l }, l);
                  else if (n === b.I.SOCIAL_LAYER_STOREFRONT) {
                      let [e, t] = l.split("-"),
                          { channel: n } = this.props;
                      return (0, i.jsx)(ea.A, { guildId: t, skuId: e, channel: n }, l);
                  } else if (n === b.I.QUESTS_EMBED) return (0, i.jsx)($.A, { questId: l }, l);
                  else if (n === b.I.APP_DIRECTORY_STOREFRONT) return (0, i.jsx)(f.G, { appId: l, message: e }, l);
                  else if (n === b.I.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, A.u)(l);
                      return null == t
                          ? null
                          : (0, i.jsx)(f.$, { appId: t.applicationId, skuId: t.skuId, message: e }, l);
                  } else if (n === b.I.APP_OAUTH2_LINK) return (0, i.jsx)(C.A, { applicationId: l, message: e }, l);
                  else if (n === b.I.COLLECTIBLES_SHOP) return null;
                  else if (n === b.I.EXPERIMENT) return null;
                  else throw Error(`Unknown coded link type: ${n}`);
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: l, type: a, content: s, giftInfo: r } = e,
            o = eg.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: eX.zv,
                          children: (0, i.jsx)(ek.A, {
                              code: e,
                              author: n,
                              channelId: l,
                              currentUser: o,
                              type: a,
                              content: s,
                              giftInfo: r,
                          }),
                      },
                      e,
                  ),
              )
            : null;
    }
    renderReactions(e) {
        let {
            disableReactionCreates: t,
            disableReactionReads: n,
            disableReactionUpdates: l,
            isLurking: a,
            isPendingMember: s,
            channel: r,
            forceAddReactions: o,
        } = this.props;
        return n
            ? null
            : (0, i.jsx)(eW.A, {
                  message: e,
                  channel: r,
                  disableReactionCreates: t,
                  disableReactionUpdates: l,
                  isLurking: a,
                  isPendingMember: s,
                  forceAddReactions: o,
                  useChatFontScaling: !0,
              });
    }
    renderAttachments(e) {
        let {
                channel: t,
                gifAutoPlay: n,
                canDeleteAttachments: l,
                inlineAttachmentMedia: a,
                onMediaItemContextMenu: s,
                enabledContentHarmTypeFlags: r,
                shouldHideMediaOptions: d,
            } = this.props,
            { attachments: c, flags: u } = e;
        if (0 === c.length || e.isPoll() || (0, eu._c)(e)) return null;
        let m = c.filter((e) => null == e.flags || !(0, o.Lt)(e.flags, eZ.sbO.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let _ = m
                .map((t) => ({
                    ...(0, z.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, o.Lt)(t.flags ?? 0, eZ.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: h, srcToHandlePreloadImage: p } = (0, Z.o)(
                _,
                { enabledContentHarmTypeFlags: r, shouldHideMediaOptions: d },
                "Media Mosaic",
            ),
            g = _.length > 1,
            A = (0, o.Lt)(u, eZ.pr7.IS_VOICE_MESSAGE);
        function f(e, t) {
            return (0, eb.iW)(e.originalItem, t);
        }
        let x = m.map((i) => {
            let r = (0, z.aG)(i),
                o = {
                    message: e,
                    item: (0, eq.rC)(i, a),
                    autoPlayGif: n,
                    canRemoveItem: l && (m.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: f,
                    onContextMenu:
                        null != s
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), s(e, r);
                              }
                            : void 0,
                    renderAudioComponent: A ? eM.SX : eM.Nj,
                    renderImageComponent: eM.Cr,
                    renderVideoComponent: eM.I1,
                    renderPlaintextFilePreview: eM.R6,
                    renderGenericFileComponent: eM.UB,
                    renderMosaicItemFooter: eM.YE,
                    onPlay: (e, n, l) => {
                        ef.default.track(eZ.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            channel_type: t.type,
                            type: i.content_type,
                            flags: i.flags,
                            size: i.size,
                            duration: l,
                        });
                    },
                    gifFavoriteButton: e2(r),
                },
                d = (0, eA.E)({ proxyURL: i.proxy_url, url: i.url });
            return d in h && g && ((o.onClick = h[d]), (o.handlePreloadImage = p[d])), o;
        });
        return (0, i.jsx)(eV.A, { items: x });
    }
    renderEmbed = (e, t, n, l) => {
        let {
                gifAutoPlay: a,
                inlineEmbedMedia: s,
                canSuppressEmbeds: r,
                hasSpoilerEmbeds: o,
                enabledContentHarmTypeFlags: d,
                shouldAgeVerify: c,
            } = this.props,
            u = (0, eb.sC)(e, l, o, d);
        if (e.type === eZ.Auw.GIFT) return null;
        let m = e$.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, i.jsx)(
            P.G.Provider,
            {
                value: (0, eQ.b)(m, e.image, e.video, e.thumbnail, e.provider?.name),
                children: (0, i.jsx)(I.Ay, {
                    embed: e,
                    obscureReason: u ?? void 0,
                    autoPlayGif: a,
                    hideMedia: !s,
                    allowFullScreen: !this.props.disableComponentInteractivity,
                    onSuppressEmbed: r ? this.handleEmbedSuppressed : void 0,
                    renderTitle: this.renderEmbedTitle,
                    renderDescription: this.renderEmbedDescription,
                    message: l,
                    embedIndex: t,
                    shouldAgeVerify: c ?? !1,
                    ...n,
                }),
            },
            e.id,
        );
    };
    renderEmbedTitle = (e, t) =>
        e.type !== eZ.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? W.A.parseEmbedTitleWithoutLinks : W.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === eZ.Auw.RICH
            ? W.A.parse(t, !0, {
                  channelId: this.props.channel.id,
                  allowLinks: !0,
                  allowEmojiLinks: !0,
                  allowList: this.props.showListsAndHeaders,
                  allowHeading: !n && this.props.showListsAndHeaders,
                  previewLinkTarget: this.props.showMaskedLinks,
              })
            : t;
    handleEmbedSuppressed = (e) => {
        let { channel: t, message: n } = this.props;
        e.shiftKey ? h.A.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
    };
    handleRemoveAttachment = (e) => {
        let t = e.originalItem;
        this.setState({ showRemoveAttachmentModal: !0, attachmentToDelete: t });
    };
    renderEmbeds(e) {
        let { renderEmbeds: t, hasBailedAst: n } = this.props;
        return 0 === e.embeds.length || !t || n
            ? null
            : e.embeds.map((t, n) => {
                  if (
                      eK.z.has(t.type) ||
                      (0, eC.p6)(t) ||
                      ((0, B.f)(t) && !(0, F.d)(e)) ||
                      (0, eC.V)(t) ||
                      (0, eC.G8)(t)
                  )
                      return null;
                  if (t.type === eZ.Auw.COMPONENTS && null != t.components && t.components.length > 0) {
                      var l = this;
                      let {
                              gifAutoPlay: n,
                              enabledContentHarmTypeFlags: a,
                              shouldHideMediaOptions: s,
                              onMediaItemContextMenu: r,
                              canSuppressEmbeds: o,
                              hasSpoilerEmbeds: d,
                          } = this.props,
                          c = (0, eb.sC)(t, e, d, a),
                          u = function () {
                              let d = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, i.jsx)(
                                  eR.A,
                                  {
                                      components: t.components ?? [],
                                      message: e,
                                      gifAutoPlay: n,
                                      getGifFavButton: e2,
                                      getOnMediaItemContextMenu:
                                          null == r
                                              ? void 0
                                              : (e) => (t) => {
                                                    t.stopPropagation(), t.preventDefault(), r?.(t, e);
                                                },
                                      shouldHideMediaOptions: s,
                                      enabledContentHarmTypeFlags: a,
                                      onSuppressEmbed: o ? l.handleEmbedSuppressed : void 0,
                                      hiddenSpoiler: d,
                                  },
                                  t.id,
                              );
                          };
                      return null != c
                          ? (0, i.jsx)(
                                en.Ay,
                                {
                                    type: en.Ay.Types.EMBED,
                                    reason: c,
                                    isSingleMosaicItem: !0,
                                    containerStyles: { width: "fit-content" },
                                    children: (e) => u(e),
                                },
                                t.id,
                            )
                          : u();
                  }
                  let a = { renderImageComponent: eF.LL, renderVideoComponent: eF.$o, renderLinkComponent: eF.bU };
                  if (
                      t.type === eZ.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let l = eI.A.safeParseWithQuery(t.url);
                      if (null != l && null != l.pathname) {
                          let s = l.pathname.split("/")[3];
                          if (null != s)
                              return (0, i.jsx)(
                                  eY.A,
                                  { skuId: s, renderFallback: () => this.renderEmbed(t, n, a, e) },
                                  t.id,
                              );
                      }
                  }
                  return this.renderEmbed(t, n, a, e);
              });
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length) return null;
        let {
            gifAutoPlay: t,
            enabledContentHarmTypeFlags: n,
            shouldHideMediaOptions: l,
            disableComponentInteractivity: a,
            onMediaItemContextMenu: s,
        } = this.props;
        return (0, i.jsx)(eG.N, {
            gifAutoPlay: t,
            getGifFavButton: e2,
            getOnMediaItemContextMenu:
                null == s
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), s?.(t, e);
                      },
            shouldHideMediaOptions: l,
            enabledContentHarmTypeFlags: n,
            children: (0, i.jsx)(H.Ay, { message: e, shouldDisableInteractiveComponents: a }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, i.jsx)(eB.A, { channel: t, message: e, hideParty: !1 });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eZ.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, i.jsx)(E.A, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, eT.ec)(e)
            ? (0, i.jsx)(ew.A, {
                  message: e,
                  onDeleteMessage: () => {
                      h.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, es.o6)(e),
            { channel: n, isInteracting: l } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, i.jsx)(er.A, { channel: n, isInteracting: l, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(eZ.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, i.jsx)(ed.A, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(eZ.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - eE.default.extractTimestamp(e.id) >= e0)
        )
            return (0, i.jsx)("div", { className: eX.xM, children: eJ.intl.string(eJ.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, i.jsxs)(m.M, {
            dismissable: !0,
            header: eJ.intl.string(eJ.t.VL1KOk),
            confirmText: eJ.intl.string(eJ.t.YEHppG),
            cancelText: eJ.intl.string(eJ.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                h.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, i.jsx)(_.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: eX.IX,
                    children: eJ.intl.string(eJ.t["vXZ+Fo"]),
                }),
                (0, i.jsx)(_.E, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: eJ.intl.string(eJ.t["5j2by3"]),
                }),
            ],
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        return null == n
            ? void this.setState({ showRemoveAttachmentModal: !1 })
            : (0, i.jsx)(m.M, {
                  dismissable: !0,
                  header: eJ.intl.string(eJ.t.CbTIEo),
                  confirmText: eJ.intl.string(eJ.t.kFwAsa),
                  cancelText: eJ.intl.string(eJ.t["ETE/oC"]),
                  onCancel: () => this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }),
                  onConfirm: () => {
                      let i = t.attachments.filter((e) => e.id !== n.id);
                      h.A.patchMessageAttachments(e.id, t.id, i),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null });
                  },
                  children: (0, i.jsx)(_.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: eX.IX,
                      children: eJ.intl.string(eJ.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== r.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, i.jsx)(eH.A, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, i.jsx)(eP.A, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id,
                  message: e,
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eZ.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, i.jsx)(K.A, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eZ.Auw.SAFETY_POLICY_NOTICE
            ? (0, i.jsx)(ei.V, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eZ.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, i.jsx)(el.l, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, y.KM)(e)
            ? (0, i.jsx)(j.A, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, i.jsx)(X.A, { message: e, poll: t, className: eX.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, i.jsx)(v.f, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, ee.Mn)(e, this.props.channel)) return (0, i.jsx)(et.A, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, ee.Mn)(e, this.props.channel)) return (0, i.jsx)(R.A, { message: e });
    }
    renderEditedTag(e, t) {
        return (0, i.jsx)(ez.A, { message: e, compact: t, location: ez.O.AFTER_ACCESSORIES });
    }
    render() {
        let { className: e, message: t, poll: n, compact: l } = this.props,
            { showSuppressModal: a, showRemoveAttachmentModal: r } = this.state,
            o = this.renderEditedTag(t, l),
            d = this.renderCodedLinks(t),
            c = this.renderGiftCodes(t),
            u = this.renderAttachments(t),
            m = this.renderCtaButton(),
            _ = this.renderEmbeds(t),
            h = this.renderActivityInvite(t),
            p = this.renderReactions(t),
            g = this.renderPublishBump(t),
            A = this.renderEphemeralAccessories(t),
            f = this.renderStickersAccessories(t),
            x = this.renderThreadAccessories(t),
            C = this.renderComponentAccessories(t),
            E = this.renderThreadRoleMentionWarning(t),
            I = this.renderEmbeddedApplicationInstanceEmbed(t),
            v = this.renderInteractionPremiumUpsell(t),
            b = this.renderMediaPostEmbeds(t),
            T = this.renderSafetyPolicyNotice(t),
            S = this.renderSafetySystemNotification(t),
            y = this.renderMediaObscureNotice(t),
            N = this.renderPoll(t, n),
            j = this.renderForwardedMessage(t),
            L = this.renderReportedMessage(t),
            R = this.renderShareClientTheme(t);
        return null == d &&
            null == u &&
            null == _ &&
            null == h &&
            null == p &&
            null == c &&
            null == g &&
            null == A &&
            null == f &&
            null == x &&
            null == C &&
            null == I &&
            null == E &&
            null == b &&
            null == T &&
            null != v &&
            null == N &&
            null == j &&
            null == L &&
            null == R
            ? null
            : (0, i.jsxs)("div", {
                  id: (0, eU.XL)(t),
                  className: s()(e, eX.kL),
                  children: [
                      L,
                      j,
                      E,
                      N,
                      R,
                      d,
                      c,
                      b,
                      u,
                      m,
                      _,
                      y,
                      h,
                      f,
                      C,
                      I,
                      v,
                      o,
                      p,
                      g,
                      A,
                      a && this.renderSuppressConfirmModal(),
                      r && this.renderRemoveAttachmentConfirmModal(),
                      x,
                      T,
                      S,
                  ],
              });
    }
}
function e6(e) {
    let { channel: t, message: n, renderSuppressEmbeds: l, isMessageSnapshot: a } = e,
        s = (0, d.bG)([em.default], () => em.default.getId()),
        r = ec.X6.useSetting(),
        c = ec.hD.useSetting(),
        u = ec.rs.useSetting() && !(0, eN.A)(e.message),
        m = ec.jW.useSetting() && !1 !== e.renderReactions,
        _ = ec.kt.useSetting(),
        h = (0, d.bG)([eh.A], () => null == t.guild_id || eh.A.canChatInGuild(t.guild_id), [t]),
        p = (0, d.bG)([V.A], () => null != t.guild_id && V.A.isLurking(t.guild_id), [t]),
        g = (0, d.bG)([e_.Ay, eg.default], () => {
            let e = eg.default.getCurrentUser();
            return (null != t.guild_id && null != e ? e_.Ay.getMember(t.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: A, canManageMessages: f } = (0, d.cf)(
            [ep.A],
            () => ({
                canAddNewReactions: h && ep.A.can(eZ.xBc.ADD_REACTIONS, t),
                canManageMessages: ep.A.can(eZ.xBc.MANAGE_MESSAGES, t),
            }),
            [h, t],
        ),
        x = (0, D.ix)(t.guild_id),
        [, C] = (0, k.c)(t.guild_id),
        E = (0, eo.Id)(t),
        I =
            (s === n.author.id || f) &&
            n.author.id !== eZ.oIV &&
            !1 !== l &&
            !(0, o.Lt)(n.flags, eZ.pr7.EPHEMERAL) &&
            E &&
            (0, ey.A)(n) >= 1,
        v = s === n.author.id && E && !a,
        b = n.author.id === s,
        T = n.isFirstMessageInForumPost(t),
        y = (0, ej.A)({
            channel: t,
            canChat: h,
            renderReactions: m,
            canAddNewReactions: A,
            isLurking: p,
            communicationDisabled: C,
            isActiveChannelOrUnarchivableThread: E,
            isAutomodQuarantined: x,
        }),
        j = (0, q.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        L = (0, Q.A)(t?.id),
        R = (0, J.A)(n),
        P = (0, N.P)(n),
        w = (0, eS.z)(t),
        O = (0, ev._f)(n.id, n.channel_id),
        M = (0, S._R)();
    return (0, i.jsx)(e9, {
        canSuppressEmbeds: I,
        canDeleteAttachments: v,
        ...y,
        disableReactionReads: !!T || y.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && w,
        hasBailedAst: e.hasBailedAst,
        isLurking: p && h,
        isPendingMember: g && h,
        isCurrentUser: b,
        inlineAttachmentMedia: r,
        inlineEmbedMedia: c,
        renderEmbeds: u,
        gifAutoPlay: _,
        canRenderReferralEmbed: t.isDM(),
        poll: R,
        showListsAndHeaders: j,
        showMaskedLinks: j,
        shouldHideMediaOptions: L,
        enabledContentHarmTypeFlags: P,
        ctaButtonType: O,
        shouldAgeVerify: M,
    });
}
let e7 = (e) => {
    let {
            message: t,
            channel: n,
            disableReactionReads: l = !1,
            renderThreadAccessory: a = !1,
            disableReactionCreates: s = !0,
            disableReactionUpdates: r = !0,
            disableComponentInteractivity: o = !0,
            ...d
        } = e,
        c = ec.X6.useSetting(),
        u = ec.hD.useSetting(),
        m = ec.rs.useSetting(),
        _ = ec.kt.useSetting(),
        h = (0, q.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        p = (0, Q.A)(n?.id),
        g = (0, N.P)(t),
        A = (0, ev._f)(t.id, t.channel_id),
        f = (0, J.A)(t);
    return (0, i.jsx)(e9, {
        ...d,
        message: t,
        channel: n,
        disableReactionReads: l,
        disableReactionCreates: s,
        disableReactionUpdates: r,
        disableComponentInteractivity: o,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderThreadAccessory: a,
        inlineAttachmentMedia: c,
        inlineEmbedMedia: u,
        renderEmbeds: m,
        gifAutoPlay: _,
        poll: f,
        showListsAndHeaders: h,
        showMaskedLinks: h,
        shouldHideMediaOptions: p,
        enabledContentHarmTypeFlags: g,
        ctaButtonType: A,
    });
};
