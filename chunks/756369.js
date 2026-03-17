n.d(t, { Ay: () => e0, OC: () => e1, iV: () => e$ }), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(448761),
    o = n(665260),
    d = n(311907),
    c = n(803805),
    u = n(52133),
    _ = n(397927),
    m = n(843472),
    h = n(488331),
    p = n(298481),
    g = n(121401),
    A = n(509282),
    x = n(909338),
    f = n(948729),
    C = n(150099),
    I = n(871751),
    E = n(510790),
    v = n(167189),
    b = n(175335),
    T = n(390248),
    S = n(282108),
    y = n(33358),
    N = n(704400),
    j = n(496376),
    L = n(795982),
    R = n(643612),
    P = n(613760),
    D = n(229527),
    M = n(870136),
    w = n(33525),
    O = n(484724),
    k = n(71755),
    U = n(178879),
    G = n(118331),
    B = n(520586),
    F = n(857071),
    H = n(384231),
    V = n(46054),
    W = n(731068),
    q = n(619517),
    Y = n(207133),
    z = n(480191),
    Q = n(269849),
    K = n(704413),
    J = n(695206),
    X = n(892742),
    Z = n(376708),
    $ = n(549527),
    ee = n(899894),
    et = n(581034),
    en = n(50777),
    ei = n(378058),
    el = n(443642),
    er = n(406704),
    ea = n(996522),
    es = n(253932),
    eo = n(383233),
    ed = n(961350),
    ec = n(696451),
    eu = n(834942),
    e_ = n(576705),
    em = n(287809),
    eh = n(644447),
    ep = n(954571),
    eg = n(927813),
    eA = n(659674),
    ex = n(661191),
    ef = n(998218),
    eC = n(988012),
    eI = n(294520),
    eE = n(141468),
    ev = n(863439),
    eb = n(869938),
    eT = n(143413),
    eS = n(707985),
    ey = n(443228),
    eN = n(341645),
    ej = n(986350),
    eL = n(439401),
    eR = n(466802),
    eP = n(990560),
    eD = n(266620),
    eM = n(860227),
    ew = n(564107),
    eO = n(763899),
    ek = n(652176),
    eU = n(382807),
    eG = n(394839),
    eB = n(96782),
    eF = n(573163),
    eH = n(861986),
    eV = n(937266),
    eW = n(343552),
    eq = n(581619),
    eY = n(652215),
    ez = n(985018),
    eQ = n(867525);
let eK = [eY.Auw.GIFV],
    eJ = 15 * eg.A.Millis.MINUTE,
    eX = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    eZ = (e) => () => {
        let { url: t, proxyUrl: n, width: l, height: r, flags: a } = e,
            s = (0, o.Lt)(a, W.e5.IS_ANIMATED);
        return null != l && null != r && (q.bp.test(n) || (s && (q.P8.test(n) || q.p4.test(n))))
            ? (0, i.jsx)(eL.A, { width: l, height: r, src: n, url: t, format: c.TL.IMAGE, className: eQ.jj })
            : null;
    };
class e$ extends l.Component {
    static defaultProps = { renderEmbeds: !0, compact: !1 };
    state = { showSuppressModal: !1, showRemoveAttachmentModal: !1, attachmentToDelete: null };
    getAcceptInviteContext = (e) => {
        let { channel: t, message: n } = this.props;
        return {
            location: e,
            location_guild_id: t.getGuildId(),
            location_channel_id: t.id,
            location_channel_type: t.type,
            location_message_id: n.id,
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eX.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: l, message: r, poll: a } = this.props,
            { channel: s, message: o, poll: d } = e;
        return (
            !(0, u.A)(this.state, t) ||
            !(0, u.A)(this.props, e, ["message", "channel"]) ||
            l.type !== s.type ||
            d !== a ||
            o.codedLinks !== r.codedLinks ||
            o.flags !== r.flags ||
            o.giftCodes !== r.giftCodes ||
            o.attachments !== r.attachments ||
            o.embeds !== r.embeds ||
            o.components !== r.components ||
            o.activity !== r.activity ||
            ((n = o.reactions) !== (i = r.reactions) &&
                (n.length !== i.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: l, burst_count: r } = e,
                            { emoji: a, count: s, burst_count: o } = i[t];
                        return r !== o || l !== s || n.id !== a.id || n.name !== a.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            l = null;
        switch (n) {
            case eC.xC.MARK_AS_FALSE_POSITIVE:
                l = (0, i.jsx)(j.A, { messageId: e.id, channelId: t.id });
                break;
            case eC.xC.AGE_VERIFICATION_RETRY:
                l = (0, i.jsx)(p.A, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, i.jsx)("div", { className: eQ.od, children: l });
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: l, url: r } = t;
                  if (n === v.I.INVITE)
                      return this.shouldRenderInvite(l)
                          ? (0, i.jsx)(
                                eP.A,
                                { code: l, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                                l,
                            )
                          : null;
                  if (n === v.I.TEMPLATE) return (0, i.jsx)(k.A, { code: l }, l);
                  if (n === v.I.EVENT) return (0, i.jsx)(O.A, { code: l }, l);
                  if (n === v.I.CHANNEL_LINK) return (0, i.jsx)(ey.A, { code: l, message: e }, l);
                  if (n === v.I.APP_DIRECTORY_PROFILE) return (0, i.jsx)(P.A, { code: l, message: e }, l);
                  else if (n === v.I.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: a } = (0, x.N)(r);
                      return (0, i.jsx)(
                          h.A,
                          { applicationId: l, message: e, referrerId: t, customId: n, linkId: a },
                          l,
                      );
                  } else if (n === v.I.GUILD_PRODUCT) return (0, i.jsx)(w.A, { code: l }, l);
                  else if (n === v.I.SERVER_SHOP) return (0, i.jsx)(b.A, { guildId: l }, l);
                  else if (n === v.I.SOCIAL_LAYER_STOREFRONT) {
                      let [e, t] = l.split("-"),
                          { channel: n } = this.props;
                      return (0, i.jsx)(en.A, { guildId: t, skuId: e, channel: n }, l);
                  } else if (n === v.I.QUESTS_EMBED) return (0, i.jsx)(X.A, { questId: l }, l);
                  else if (n === v.I.APP_DIRECTORY_STOREFRONT) return (0, i.jsx)(A.G, { appId: l, message: e }, l);
                  else if (n === v.I.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, g.u)(l);
                      return null == t
                          ? null
                          : (0, i.jsx)(A.$, { appId: t.applicationId, skuId: t.skuId, message: e }, l);
                  } else if (n === v.I.APP_OAUTH2_LINK) return (0, i.jsx)(f.A, { applicationId: l, message: e }, l);
                  else if (n === v.I.COLLECTIBLES_SHOP) return null;
                  else if (n === v.I.EXPERIMENT) return null;
                  else throw Error(`Unknown coded link type: ${n}`);
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: l, type: r, content: a, giftInfo: s } = e,
            o = em.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: eQ.zv,
                          children: (0, i.jsx)(eR.A, {
                              code: e,
                              author: n,
                              channelId: l,
                              currentUser: o,
                              type: r,
                              content: a,
                              giftInfo: s,
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
            isLurking: r,
            isPendingMember: a,
            channel: s,
            forceAddReactions: o,
        } = this.props;
        return n
            ? null
            : (0, i.jsx)(eF.A, {
                  message: e,
                  channel: s,
                  disableReactionCreates: t,
                  disableReactionUpdates: l,
                  isLurking: r,
                  isPendingMember: a,
                  forceAddReactions: o,
                  useChatFontScaling: !0,
              });
    }
    renderAttachments(e) {
        let {
                channel: t,
                gifAutoPlay: n,
                canDeleteAttachments: l,
                inlineAttachmentMedia: r,
                onMediaItemContextMenu: a,
                enabledContentHarmTypeFlags: s,
                shouldHideMediaOptions: d,
            } = this.props,
            { attachments: c, flags: u } = e;
        if (0 === c.length || e.isPoll() || (0, eo._c)(e)) return null;
        let _ = c.filter((e) => null == e.flags || !(0, o.Lt)(e.flags, eY.sbO.IS_THUMBNAIL));
        if (0 === _.length) return null;
        let m = _.map((t) => ({
                ...(0, W.Rr)(t, e),
                original: t.url,
                srcIsAnimated: (0, o.Lt)(t.flags ?? 0, eY.sbO.IS_ANIMATED),
            })).filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: h, srcToHandlePreloadImage: p } = (0, Q.o)(
                m,
                { enabledContentHarmTypeFlags: s, shouldHideMediaOptions: d },
                "Media Mosaic",
            ),
            g = m.length > 1,
            A = (0, o.Lt)(u, eY.pr7.IS_VOICE_MESSAGE);
        function x(e, t) {
            return (0, eI.iW)(e.originalItem, t);
        }
        let f = _.map((i) => {
            let s = (0, W.aG)(i),
                o = {
                    message: e,
                    item: (0, eB.rC)(i, r),
                    autoPlayGif: n,
                    canRemoveItem: l && (_.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: x,
                    onContextMenu:
                        null != a
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), a(e, s);
                              }
                            : void 0,
                    renderAudioComponent: A ? eD.SX : eD.Nj,
                    renderImageComponent: eD.Cr,
                    renderVideoComponent: eD.I1,
                    renderPlaintextFilePreview: eD.R6,
                    renderGenericFileComponent: eD.UB,
                    renderMosaicItemFooter: eD.YE,
                    onPlay: (e, n, l) => {
                        ep.default.track(eY.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            channel_type: t.type,
                            type: i.content_type,
                            flags: i.flags,
                            size: i.size,
                            duration: l,
                        });
                    },
                    gifFavoriteButton: eZ(s),
                },
                d = (0, eh.E)({ proxyURL: i.proxy_url, url: i.url });
            return d in h && g && ((o.onClick = h[d]), (o.handlePreloadImage = p[d])), o;
        });
        return (0, i.jsx)(eG.A, { items: f });
    }
    renderEmbed = (e, t, n, l) => {
        let {
                gifAutoPlay: r,
                inlineEmbedMedia: a,
                canSuppressEmbeds: s,
                hasSpoilerEmbeds: o,
                enabledContentHarmTypeFlags: d,
                shouldAgeVerify: c,
            } = this.props,
            u = (0, eI.sC)(e, l, o, d);
        if (e.type === eY.Auw.GIFT) return null;
        let _ = eK.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, i.jsx)(
            R.G.Provider,
            {
                value: (0, eW.b)(_, e.image, e.video, e.thumbnail, e.provider?.name),
                children: (0, i.jsx)(I.Ay, {
                    embed: e,
                    obscureReason: u ?? void 0,
                    autoPlayGif: r,
                    hideMedia: !a,
                    allowFullScreen: !this.props.disableComponentInteractivity,
                    onSuppressEmbed: s ? this.handleEmbedSuppressed : void 0,
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
        e.type !== eY.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? V.A.parseEmbedTitleWithoutLinks : V.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === eY.Auw.RICH
            ? V.A.parse(t, !0, {
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
        e.shiftKey ? m.A.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
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
                      eq.z.has(t.type) ||
                      (0, eA.p6)(t) ||
                      ((0, U.f)(t) && !(0, G.d)(e)) ||
                      (0, eA.V)(t) ||
                      (0, eA.G8)(t)
                  )
                      return null;
                  let l = { renderImageComponent: ek.LL, renderVideoComponent: ek.$o, renderLinkComponent: ek.bU };
                  if (
                      t.type === eY.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let r = ef.A.safeParseWithQuery(t.url);
                      if (null != r && null != r.pathname) {
                          let a = r.pathname.split("/")[3];
                          if (null != a)
                              return (0, i.jsx)(
                                  eV.A,
                                  { skuId: a, renderFallback: () => this.renderEmbed(t, n, l, e) },
                                  t.id,
                              );
                      }
                  }
                  return this.renderEmbed(t, n, l, e);
              });
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length) return null;
        let {
            gifAutoPlay: t,
            enabledContentHarmTypeFlags: n,
            shouldHideMediaOptions: l,
            disableComponentInteractivity: r,
            onMediaItemContextMenu: a,
        } = this.props;
        return (0, i.jsx)(ew.N, {
            gifAutoPlay: t,
            getGifFavButton: eZ,
            getOnMediaItemContextMenu:
                null == a
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), a?.(t, e);
                      },
            shouldHideMediaOptions: l,
            enabledContentHarmTypeFlags: n,
            children: (0, i.jsx)(B.Ay, { message: e, shouldDisableInteractiveComponents: r }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, i.jsx)(eO.A, { channel: t, message: e, hideParty: !1 });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eY.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, i.jsx)(C.A, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, eE.ec)(e)
            ? (0, i.jsx)(ej.A, {
                  message: e,
                  onDeleteMessage: () => {
                      m.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, ei.o6)(e),
            { channel: n, isInteracting: l } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, i.jsx)(el.A, { channel: n, isInteracting: l, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(eY.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, i.jsx)(ea.A, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(eY.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - ex.default.extractTimestamp(e.id) >= eJ)
        )
            return (0, i.jsx)("div", { className: eQ.xM, children: ez.intl.string(ez.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, i.jsxs)(_.MJ3, {
            dismissable: !0,
            header: ez.intl.string(ez.t.VL1KOk),
            confirmText: ez.intl.string(ez.t.YEHppG),
            cancelText: ez.intl.string(ez.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                m.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, i.jsx)(_.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: eQ.IX,
                    children: ez.intl.string(ez.t["vXZ+Fo"]),
                }),
                (0, i.jsx)(_.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: ez.intl.string(ez.t["5j2by3"]),
                }),
            ],
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        return null == n
            ? void this.setState({ showRemoveAttachmentModal: !1 })
            : (0, i.jsx)(_.MJ3, {
                  dismissable: !0,
                  header: ez.intl.string(ez.t.CbTIEo),
                  confirmText: ez.intl.string(ez.t.kFwAsa),
                  cancelText: ez.intl.string(ez.t["ETE/oC"]),
                  onCancel: () => this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }),
                  onConfirm: () => {
                      let i = t.attachments.filter((e) => e.id !== n.id);
                      m.A.patchMessageAttachments(e.id, t.id, i),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null });
                  },
                  children: (0, i.jsx)(_.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: eQ.IX,
                      children: ez.intl.string(ez.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== s.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, i.jsx)(eU.A, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, i.jsx)(eN.A, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id,
                  message: e,
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eY.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, i.jsx)(z.A, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eY.Auw.SAFETY_POLICY_NOTICE
            ? (0, i.jsx)(ee.V, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eY.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, i.jsx)(et.l, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, S.KM)(e)
            ? (0, i.jsx)(N.A, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, i.jsx)(J.A, { message: e, poll: t, className: eQ.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, i.jsx)(E.f, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, Z.Mn)(e, this.props.channel)) return (0, i.jsx)($.A, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, Z.Mn)(e, this.props.channel)) return (0, i.jsx)(L.A, { message: e });
    }
    renderEditedTag(e, t) {
        return (0, i.jsx)(eH.A, { message: e, compact: t, location: eH.O.AFTER_ACCESSORIES });
    }
    render() {
        let { className: e, message: t, poll: n, compact: l } = this.props,
            { showSuppressModal: r, showRemoveAttachmentModal: s } = this.state,
            o = this.renderEditedTag(t, l),
            d = this.renderCodedLinks(t),
            c = this.renderGiftCodes(t),
            u = this.renderAttachments(t),
            _ = this.renderCtaButton(),
            m = this.renderEmbeds(t),
            h = this.renderActivityInvite(t),
            p = this.renderReactions(t),
            g = this.renderPublishBump(t),
            A = this.renderEphemeralAccessories(t),
            x = this.renderStickersAccessories(t),
            f = this.renderThreadAccessories(t),
            C = this.renderComponentAccessories(t),
            I = this.renderThreadRoleMentionWarning(t),
            E = this.renderEmbeddedApplicationInstanceEmbed(t),
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
            null == m &&
            null == h &&
            null == p &&
            null == c &&
            null == g &&
            null == A &&
            null == x &&
            null == f &&
            null == C &&
            null == E &&
            null == I &&
            null == b &&
            null == T &&
            null != v &&
            null == N &&
            null == j &&
            null == L &&
            null == R
            ? null
            : (0, i.jsxs)("div", {
                  id: (0, eM.XL)(t),
                  className: a()(e, eQ.kL),
                  children: [
                      L,
                      j,
                      I,
                      N,
                      R,
                      d,
                      c,
                      b,
                      u,
                      _,
                      m,
                      y,
                      h,
                      x,
                      C,
                      E,
                      v,
                      o,
                      p,
                      g,
                      A,
                      r && this.renderSuppressConfirmModal(),
                      s && this.renderRemoveAttachmentConfirmModal(),
                      f,
                      T,
                      S,
                  ],
              });
    }
}
function e0(e) {
    let { channel: t, message: n, renderSuppressEmbeds: l, isMessageSnapshot: r } = e,
        a = (0, d.bG)([ed.default], () => ed.default.getId()),
        s = es.X6.useSetting(),
        c = es.hD.useSetting(),
        u = es.rs.useSetting() && !(0, eT.A)(e.message),
        _ = es.jW.useSetting() && !1 !== e.renderReactions,
        m = es.kt.useSetting(),
        h = (0, d.bG)([eu.A], () => null == t.guild_id || eu.A.canChatInGuild(t.guild_id), [t]),
        p = (0, d.bG)([F.A], () => null != t.guild_id && F.A.isLurking(t.guild_id), [t]),
        g = (0, d.bG)([ec.Ay, em.default], () => {
            let e = em.default.getCurrentUser();
            return (null != t.guild_id && null != e ? ec.Ay.getMember(t.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: A, canManageMessages: x } = (0, d.cf)(
            [e_.A],
            () => ({
                canAddNewReactions: h && e_.A.can(eY.xBc.ADD_REACTIONS, t),
                canManageMessages: e_.A.can(eY.xBc.MANAGE_MESSAGES, t),
            }),
            [h, t],
        ),
        f = (0, D.ix)(t.guild_id),
        [, C] = (0, M.c)(t.guild_id),
        I = (0, er.Id)(t),
        E =
            (a === n.author.id || x) &&
            n.author.id !== eY.oIV &&
            !1 !== l &&
            !(0, o.Lt)(n.flags, eY.pr7.EPHEMERAL) &&
            I &&
            (0, eb.A)(n) >= 1,
        v = a === n.author.id && I && !r,
        b = n.author.id === a,
        S = n.isFirstMessageInForumPost(t),
        N = (0, eS.A)({
            channel: t,
            canChat: h,
            renderReactions: _,
            canAddNewReactions: A,
            isLurking: p,
            communicationDisabled: C,
            isActiveChannelOrUnarchivableThread: I,
            isAutomodQuarantined: f,
        }),
        j = (0, H.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        L = (0, Y.A)(t?.id),
        R = (0, K.A)(n),
        P = (0, y.P)(n),
        w = (0, ev.z)(t),
        O = (0, eC._f)(n.id, n.channel_id),
        k = (0, T._R)();
    return (0, i.jsx)(e$, {
        canSuppressEmbeds: E,
        canDeleteAttachments: v,
        ...N,
        disableReactionReads: !!S || N.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && w,
        hasBailedAst: e.hasBailedAst,
        isLurking: p && h,
        isPendingMember: g && h,
        isCurrentUser: b,
        inlineAttachmentMedia: s,
        inlineEmbedMedia: c,
        renderEmbeds: u,
        gifAutoPlay: m,
        canRenderReferralEmbed: t.isDM(),
        poll: R,
        showListsAndHeaders: j,
        showMaskedLinks: j,
        shouldHideMediaOptions: L,
        enabledContentHarmTypeFlags: P,
        ctaButtonType: O,
        shouldAgeVerify: k,
    });
}
let e1 = (e) => {
    let {
            message: t,
            channel: n,
            disableReactionReads: l = !1,
            renderThreadAccessory: r = !1,
            disableReactionCreates: a = !0,
            disableReactionUpdates: s = !0,
            disableComponentInteractivity: o = !0,
            ...d
        } = e,
        c = es.X6.useSetting(),
        u = es.hD.useSetting(),
        _ = es.rs.useSetting(),
        m = es.kt.useSetting(),
        h = (0, H.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        p = (0, Y.A)(n?.id),
        g = (0, y.P)(t),
        A = (0, eC._f)(t.id, t.channel_id),
        x = (0, K.A)(t);
    return (0, i.jsx)(e$, {
        ...d,
        message: t,
        channel: n,
        disableReactionReads: l,
        disableReactionCreates: a,
        disableReactionUpdates: s,
        disableComponentInteractivity: o,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderThreadAccessory: r,
        inlineAttachmentMedia: c,
        inlineEmbedMedia: u,
        renderEmbeds: _,
        gifAutoPlay: m,
        poll: x,
        showListsAndHeaders: h,
        showMaskedLinks: h,
        shouldHideMediaOptions: p,
        enabledContentHarmTypeFlags: g,
        ctaButtonType: A,
    });
};
