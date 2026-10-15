(t.d(l, { Ay: () => ed, rr: () => en }), t(321073));
var r = t(477900),
    s = t(582128),
    i = t(503698),
    n = t.n(i),
    a = t(317097),
    o = t(144165),
    d = t(939249),
    u = t(789645),
    h = t(775602),
    c = t(567243),
    m = t(652215);
function p(e) {
    return "music.apple.com" === e;
}
var g = t(17928),
    x = t(462887),
    f = t(363195);
let y = Object.freeze({
    EMBED: (e, l, t) => `https://embed.music.apple.com/${e}?theme=${l}&i=${null != t ? encodeURIComponent(t) : ""}`,
});
var w = t(411517);
function v(e) {
    let {
            className: l,
            embed: { url: t },
        } = e,
        s = (0, g.bG)([f.A], () => (0, x.M)(f.A.theme));
    if (null == t) return null;
    let i = null,
        a = null,
        o = null;
    try {
        let e = c.parse(t, !0);
        ((i = e.host), (a = e.pathname), (o = e.query.i ?? null), Array.isArray(o) && (o = o[0]));
    } catch (e) {
        return null;
    }
    if (!p(i) || null == a) return null;
    let d = /^\/([a-z]{2}(?:-[a-z]{2})?)\//.test(a) ? 2 : 1,
        u = a.split("/"),
        h = u[d]?.toLowerCase();
    null != o && (h = "song");
    let m = 450;
    return (
        "song" === h ? (m = 175) : "music-video" === h && (m = 371),
        (a = a.substr(1)),
        (0, r.jsx)("iframe", {
            className: n()(w.li, l),
            src: y.EMBED(a, s ? "dark" : "light", o),
            style: { maxWidth: 660, minWidth: 300, width: "100%", height: m },
            frameBorder: 0,
            sandbox: "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation",
            allow: "encrypted-media *; fullscreen *; clipboard-write",
        })
    );
}
var b = t(338717),
    j = t(643612),
    A = t(731068);
let I = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)");
function S(e) {
    let l = null,
        t = null,
        r = null;
    try {
        ((l = (r = c.parse(e, !0)).host), (t = r.pathname));
    } catch (e) {
        return null;
    }
    return null != r && I.test(l ?? "") && null != t ? r : null;
}
function N(e) {
    let {
        className: l,
        embed: { url: t, thumbnail: s },
    } = e;
    if (null == t || null == s) return null;
    let i = S(t);
    if (null == i) return null;
    let a = i.query.iframe_url;
    if (null == a || Array.isArray(a) || null == S(a)) return null;
    let { width: o, height: d } = s,
        u = o,
        h = d;
    return (
        (o > 500 || d > 400) && (o > d ? ((u = 500), (h = (500 * d) / o)) : ((u = (400 * o) / d), (h = 400))),
        (0, r.jsx)("iframe", {
            className: n()(w.FS, l),
            src: a,
            style: { width: u, height: h },
            frameBorder: 0,
            sandbox:
                "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
        })
    );
}
t(508300);
var C = t(607470);
t(516653);
var P = t(105292);
function E(e) {
    let {
            poster: l,
            src: t,
            width: i,
            height: n,
            naturalWidth: a,
            naturalHeight: o,
            play: d = !0,
            className: u,
            alt: h,
            responsive: c,
        } = e,
        m = s.useRef(null);
    return (s.useEffect(() => {
        let { current: e } = m;
        d
            ? e?.play()?.catch((e) => {
                  if (!(e instanceof DOMException) || "NotAllowedError" !== e.name) throw e;
              })
            : e?.pause();
    }, [d]),
    (a <= 6016 && o <= 3384) || (a <= 3384 && o <= 6016))
        ? (0, r.jsx)(C.A, {
              ref: m,
              className: u,
              poster: l,
              src: t,
              width: i,
              height: n,
              responsive: c,
              muted: !0,
              loop: !0,
              autoPlay: d,
              playsInline: !0,
              preload: "none",
              "aria-label": h,
          })
        : (0, r.jsx)("img", { alt: "", src: l, width: i, height: n });
}
function T(e) {
    let {
        src: l,
        poster: t,
        naturalWidth: s,
        naturalHeight: i,
        responsive: n,
        autoPlay: a,
        className: o,
        playable: d = !0,
        renderImageComponent: u,
        alt: h = P.intl.string(P.t.I5gL2H),
        sourceMetadata: c,
        ...m
    } = e;
    return (0, r.jsx)(j.G.Consumer, {
        children: (e) =>
            u({
                ...m,
                alt: h,
                src: t,
                containerClassName: o,
                autoPlay: a,
                animated: d,
                freeze: !0,
                responsive: n,
                renderAccessory: e,
                tabIndex: d ? 0 : -1,
                dataSafeSrc: l,
                children(e) {
                    let { src: t, size: a, animating: u, alt: h } = e;
                    return (0, r.jsx)(E, {
                        alt: h,
                        className: o,
                        poster: t,
                        src: l,
                        width: a.width,
                        height: a.height,
                        naturalWidth: s,
                        naturalHeight: i,
                        responsive: n,
                        play: d && u,
                    });
                },
                sourceMetadata: c,
                analyticsSource: "LazyGIFV",
            }),
    });
}
var M = t(619517),
    L = t(821209),
    W = t(492230),
    R = t(114212),
    _ = t(343552),
    k = t(302031);
function H(e) {
    return null != e && "open.spotify.com" === e;
}
var V = t(628137),
    O = t(272984);
function D(e) {
    let {
        className: l,
        embed: { url: t },
    } = e;
    if (null == t) return null;
    let s = null,
        i = null;
    try {
        let e = c.parse(t.replace(/intl-[^/]+\//, ""), !0);
        ((s = e.host), (i = e.pathname));
    } catch (e) {
        return null;
    }
    if (!H(s) || null == i) return null;
    let a = i.split("/"),
        o = null != a[1] ? a[1].toLowerCase() : null,
        d = n()(w.IL, l);
    if ("user" === o) {
        let e = null != a[3] ? a[3].toLowerCase() : null,
            l = a[4];
        return "playlist" !== e || null == l
            ? null
            : (0, r.jsx)(V.A, { className: d, resourceType: O.M0.PLAYLIST, resourceId: l });
    }
    let u = (0, O.NJ)(o),
        h = a[2];
    return null == u || null == h ? null : (0, r.jsx)(V.A, { className: d, resourceType: u, resourceId: h });
}
var U = t(734057),
    $ = t(644447),
    K = t(174459),
    B = t(625494),
    F = t(58703),
    G = t(659674),
    z = t(515718),
    Y = t(998218),
    J = t(912051),
    q = t(259407),
    Q = t(183129);
let X = ["sessionshare.sp-int.playstation.com", "session-share.playstation.com"],
    Z = ["PlayStation"];
function ee(e) {
    let l = e.embed.url,
        t = e.embed.provider?.name;
    if (null == l || null == t) return null;
    let s = null;
    try {
        s = c.parse(l, !0);
    } catch (e) {
        return null;
    }
    let i = (function (e, l) {
        let { host: t, pathname: r } = l,
            s = [];
        if ((null != r && (s = r.split("/")), "PlayStation" === e)) {
            let e;
            if (null == t || !X.includes(t) || 2 !== s.length) return null;
            let l = s[1];
            return {
                embedUrl: ((e = P.intl.currentLocale), `https://${t}/embed/${l}?locale=${e}`),
                style: { width: 400, height: 300, borderRadius: 6 },
            };
        }
        return null;
    })(t, s);
    return null == i
        ? null
        : (0, r.jsx)("iframe", {
              src: i.embedUrl,
              className: n()(Q.u, e.className),
              style: i.style,
              sandbox:
                  "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          });
}
var el = t(692051),
    et = t(838541),
    er = t(768570),
    es = t(165648);
function ei(e) {
    let l = Y.A.toURLSafe(e);
    return null == l ? e : (l.searchParams.set("format", "png"), l.toString());
}
function en(e) {
    let {
            className: l,
            iframeWrapperClassName: t,
            maxWidth: i,
            maxHeight: a,
            thumbnail: o,
            video: d,
            provider: u,
            allowFullScreen: h = !0,
            responsive: c = !1,
            renderImageComponent: p,
            renderVideoComponent: g,
            renderLinkComponent: x,
            playable: f = !0,
            autoPlay: y = !1,
            autoMute: v,
            volume: b,
            onPlay: j,
            onPause: A,
            onEnded: I,
            onControlsHide: S,
            onControlsShow: N,
            onVolumeChange: C,
            onMute: P,
            disableClickToUnmute: E,
            href: T,
            placeholder: M,
            placeholderVersion: W,
            sourceMetadata: R,
        } = e,
        [_, k] = s.useState(y),
        H = null != d && null == d.proxyURL,
        V = s.useCallback(() => k(!1), [k]);
    function O(e) {
        (e.preventDefault(),
            e.stopPropagation(),
            j?.(!1),
            k(!0),
            H &&
                (B._.dispatch(m.jej.VIDEO_EMBED_PLAYBACK_STARTED),
                B._.subscribeOnce(m.jej.VIDEO_EMBED_PLAYBACK_STARTED, V)));
    }
    s.useEffect(
        () => () => {
            H && B._.unsubscribe(m.jej.VIDEO_EMBED_PLAYBACK_STARTED, V);
        },
        [H, V],
    );
    let { width: D, height: U } = o;
    null != d && ((D = d.width), (U = d.height));
    let K = (0, z.Uj)({ width: D, height: U, maxWidth: i, maxHeight: a });
    ((D = Math.max(K.width, 150)), (U = Math.max(K.height, 144)));
    let F = (0, $.E)(o);
    if (null != d && null != d.proxyURL)
        return (0, r.jsx)("div", {
            className: n()(w.pu, l),
            children: g({
                poster: F,
                src: d.proxyURL,
                placeholder: M,
                placeholderVersion: W,
                width: D,
                height: U,
                responsive: c,
                autoPlay: y,
                onEnded: I,
                naturalWidth: d.width,
                naturalHeight: d.height,
                onVolumeChange: C,
                playable: f,
                autoMute: v,
                volume: b,
                onPlay: j,
                onPause: A,
                onMute: P,
                onControlsHide: S,
                onControlsShow: N,
                disableClickToUnmute: E,
                sourceMetadata: R,
            }),
        });
    if (_ && null != d) {
        let e,
            s = !0 === v || ("function" == typeof v && v()),
            o = { width: D, height: U },
            m = { width: D, height: U };
        if (c) {
            let l = 0 !== D ? U / D : 1;
            ((o = { maxWidth: i, maxHeight: a, width: void 0, height: void 0 }),
                (m = { paddingBottom: `${100 * l}%`, maxWidth: D }),
                (e = { position: "absolute", top: 0, left: 0, maxWidth: D, maxHeight: U }));
        }
        return (0, r.jsx)("div", {
            className: l,
            style: o,
            children: (0, r.jsx)("div", {
                className: n()(w.pu, t),
                style: m,
                children: (0, r.jsx)(q.A, {
                    provider: u,
                    src: d.url,
                    style: e,
                    width: D,
                    height: U,
                    allowFullScreen: h,
                    autoMute: s,
                }),
            }),
        });
    }
    return (0, r.jsxs)("div", {
        className: n()(w.pu, l),
        style: c ? { maxWidth: D } : { width: D, height: U },
        children: [
            p({
                src: F,
                width: D,
                height: U,
                maxWidth: D,
                maxHeight: U,
                responsive: c,
                containerClassName: w.tW,
                imageClassName: w.jq,
                placeholder: M,
                placeholderVersion: W,
                onClick: f && null != d ? O : null,
                sourceMetadata: R,
                analyticsSource: "EmbedVideo",
            }),
            (0, r.jsx)("div", {
                className: w._W,
                children: (0, r.jsx)("div", {
                    className: w.Fo,
                    children: f
                        ? (0, r.jsx)(L.A, {
                              onPlay: null != d ? O : null,
                              externalURL: T,
                              renderLinkComponent: x,
                              messageId: R?.message?.id,
                              channelId: R?.message?.channel_id,
                          })
                        : null,
                }),
            }),
        ],
    });
}
function ea(e) {
    let {
        className: l,
        href: t,
        autoPlay: s,
        maxWidth: i,
        maxHeight: a,
        thumbnail: o,
        video: d,
        renderImageComponent: u,
        responsive: h,
        alt: c,
        disableAltTextDisplay: m = !1,
        playable: p = !0,
        hiddenSpoilers: g,
        placeholder: x,
        placeholderVersion: f,
        sourceMetadata: y,
    } = e;
    return (0, r.jsx)(T, {
        className: n()(w.pu, l),
        original: t,
        poster: (0, $.E)(o),
        src: (0, $.E)(d),
        alt: c,
        width: o.width,
        height: o.height,
        naturalHeight: d.height,
        naturalWidth: d.width,
        maxWidth: i,
        maxHeight: a,
        responsive: h,
        autoPlay: s,
        playable: p,
        renderImageComponent: u,
        hiddenSpoilers: g,
        disableAltTextDisplay: m,
        placeholder: x,
        placeholderVersion: f,
        sourceMetadata: y,
    });
}
function eo(e) {
    let { url: l, image: t, children: i } = e,
        n = s.useMemo(() => (0, _.b)(l, t), [l, t]);
    return (0, r.jsx)(j.G.Provider, { value: n, children: i });
}
class ed extends s.PureComponent {
    static defaultProps = {
        hideMedia: !1,
        allowFullScreen: !0,
        maxThumbnailWidth: 80,
        maxThumbnailHeight: 80,
        embedIndex: 0,
    };
    state = {
        isVisible: null == this.props.obscureReason,
        videoControlsShown: !1,
        sourceMetadata: {
            message: this.props.message,
            identifier: { type: "embed", embedIndex: this.props.embedIndex },
        },
        ...(0, G.ds)(this.props.embed),
    };
    renderProvider() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { provider: l },
                renderLinkComponent: t,
                message: s,
            } = this.props;
        return null == l
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, r.jsx)("div", {
                    className: n()(w.zC, w.aK),
                    children: this.renderContentPlaceholder({ width: 80, height: 18 }),
                })
              : (0, r.jsx)("div", {
                    className: n()(w.zC, w.aK),
                    children:
                        null != l.url
                            ? t({
                                  className: w.Cj,
                                  href: l.url,
                                  tabIndex: e ? 0 : -1,
                                  children: l.name,
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  messageId: s?.id,
                                  channelId: s?.channel_id,
                              })
                            : (0, r.jsx)("span", { children: l.name }),
                });
    }
    renderAuthor() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { author: l },
                renderLinkComponent: t,
                message: s,
                autoPlayGif: i,
            } = this.props;
        return null == l
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, r.jsx)("div", {
                    className: n()(w.rN, w.aK),
                    children: this.renderContentPlaceholder({ width: 150, height: 18 }),
                })
              : (0, r.jsx)(el.Y.Consumer, {
                    children: (a) => {
                        let { disableAnimations: o } = a;
                        return (0, r.jsxs)("div", {
                            className: n()(w.rN, w.aK),
                            children: [
                                null != l.iconProxyURL
                                    ? (0, r.jsx)("img", {
                                          alt: "",
                                          className: w.SG,
                                          src: i && !o ? l.iconProxyURL : ei(l.iconProxyURL),
                                      })
                                    : null,
                                null != l.url
                                    ? t({
                                          className: w.av,
                                          href: l.url,
                                          tabIndex: e ? 0 : -1,
                                          children: l.name,
                                          target: "_blank",
                                          rel: "noreferrer noopener",
                                          messageId: s?.id,
                                          channelId: s?.channel_id,
                                      })
                                    : (0, r.jsx)("span", { className: w.QQ, children: l.name }),
                            ],
                        });
                    },
                });
    }
    renderContentPlaceholder(e) {
        let { width: l, height: t } = e;
        return (0, r.jsx)(R.FQ, { className: w.Jl, width: l, height: t, opacity: 0.3 });
    }
    renderTitle() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            { embed: l, renderLinkComponent: t, renderTitle: s, message: i } = this.props,
            { rawTitle: a, url: o } = l;
        return null == a
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, r.jsx)("div", {
                    className: n()(w.gt, w.aK),
                    children: this.renderContentPlaceholder({ width: 400, height: 30 }),
                })
              : (0, r.jsx)("div", {
                    className: n()(w.gt, w.aK),
                    children:
                        null != o
                            ? t({
                                  className: w.kv,
                                  href: o,
                                  tabIndex: e ? 0 : -1,
                                  children: s(l, a),
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  messageId: i?.id,
                                  channelId: i?.channel_id,
                              })
                            : s(l, a),
                });
    }
    renderDescription() {
        let { embed: e, renderDescription: l } = this.props,
            { rawDescription: t } = e;
        return null == t
            ? null
            : (0, r.jsx)("div", {
                  className: n()(w.cD, w.aK),
                  children: this.shouldShowStaticPlaceholder
                      ? this.renderContentPlaceholder({ width: 400, height: 50 })
                      : l(e, t, !1),
              });
    }
    renderThumbnail() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { thumbnail: l },
                maxThumbnailWidth: t,
                maxThumbnailHeight: s,
                renderImageComponent: i,
                autoPlayGif: n,
            } = this.props,
            { sourceMetadata: a } = this.state;
        return null == l
            ? null
            : (0, r.jsx)(el.Y.Consumer, {
                  children: (r) => {
                      let { disableAnimations: o } = r;
                      return i({
                          containerClassName: w.ad,
                          src: (0, $.E)(l),
                          original: l.url,
                          width: l.width,
                          height: l.height,
                          maxWidth: t,
                          maxHeight: s,
                          shouldLink: e,
                          autoPlay: n && !o,
                          srcIsAnimated: l.srcIsAnimated,
                          placeholder: l.placeholder,
                          placeholderVersion: l.placeholderVersion,
                          alt:
                              null == l.description || "" === l.description ? P.intl.string(P.t.X4IxWL) : l.description,
                          disableAltTextDisplay: null == l.description || "" === l.description,
                          mosaicStyleAlt: !0,
                          sourceMetadata: a,
                          analyticsSource: "Embed",
                      });
                  },
              });
    }
    renderFields() {
        let { embed: e } = this.props,
            { fields: l } = e;
        if (null == l || 0 === l.length) return null;
        let t = [],
            s = null;
        for (let { rawName: r, rawValue: i, inline: n } of l)
            (n || null == s || (t.push(s), (s = null)),
                null == s && (s = []),
                s.push([this.props.renderTitle(e, r), this.props.renderDescription(e, i, !0)]),
                (3 !== s.length && n) || (t.push(s), (s = null)));
        return (
            null != s && t.push(s),
            (0, r.jsx)("div", {
                className: w.j0,
                children: t.map((e, l) => {
                    let { length: t } = e;
                    return e.map((e, s) => {
                        let i,
                            n,
                            [a, o] = e;
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: w.Me,
                                style: { gridColumn: ((n = s * (i = 12 / t)), `${n + 1} / ${n + i + 1}`) },
                                children: [
                                    (0, r.jsx)("div", { className: w.$L, children: a }),
                                    (0, r.jsx)("div", { className: w.VN, children: o }),
                                ],
                            },
                            `${l}-${s}`,
                        );
                    });
                }),
            })
        );
    }
    renderImages() {
        let { hiddenSpoiler: e = !1, isVisible: l = !0 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { embed: t } = this.props,
            { maxMediaHeight: s } = this.state;
        if (null == t.images) return null;
        let [i, n, a, o] = t.images.map((r) =>
            this.renderImage({ hiddenSpoiler: e, isVisible: l, image: r, isGalleryImage: !0, allImages: t.images }),
        );
        return null == i && null == n && null == a && null == o
            ? null
            : (0, r.jsxs)("div", {
                  className: w.$B,
                  style: { height: s },
                  children: [
                      (0, r.jsxs)("div", {
                          className: w.Zf,
                          children: [
                              (0, r.jsx)(eo, { url: t.images[0].url, image: t.images[0], children: i }, 0),
                              null != o &&
                                  (0, r.jsx)(eo, { url: t.images[2]?.url, image: t.images[2], children: a }, 2),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: w.Zf,
                          children: [
                              (0, r.jsx)(eo, { url: t.images[1]?.url, image: t.images[1], children: n }, 1),
                              null == o &&
                                  null != a &&
                                  (0, r.jsx)(eo, { url: t.images[2]?.url, image: t.images[2], children: a }, 2),
                              null != o &&
                                  (0, r.jsx)(eo, { url: t.images[3]?.url, image: t.images[3], children: o }, 3),
                          ],
                      }),
                  ],
              });
    }
    handleImageHover() {
        let e = U.A.getChannel(this.props.message?.channel_id);
        K.default.track(m.HAw.IMAGE_HOVERED, {
            guild_id: e?.guild_id,
            channel_id: e?.id,
            image_recommendations_shown: !1,
        });
    }
    renderImage() {
        let {
                hiddenSpoiler: e = !1,
                isVisible: l = !0,
                image: t,
                isGalleryImage: s = !1,
                alt: i = P.intl.string(P.t.X4IxWL),
                allImages: a = null,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: o, className: d, autoPlayGif: u } = this.props,
            { maxMediaWidth: h, maxMediaHeight: c, sourceMetadata: m } = this.state;
        if (null == t) return null;
        let p = (0, $.E)(t),
            {
                srcToOnClickOverride: g,
                srcToHandlePreloadImage: x,
                srcToSeekOverride: f,
            } = null == a
                ? { srcToOnClickOverride: {}, srcToHandlePreloadImage: {}, srcToSeekOverride: {} }
                : (0, W.o)(
                      a.map((e) => ({ ...(0, A.oU)(e, m, "IMAGE"), original: e.url, srcIsAnimated: e.srcIsAnimated })),
                      {},
                      "Embed",
                  ),
            y = M.Ay.isAnimated({ src: (0, $.E)(t), original: t.url, animated: !1, srcIsAnimated: t.srcIsAnimated }),
            v = {
                containerClassName: n()(d, { [w.W$]: !s, [w.Lw]: !s, [w.I_]: s }),
                imageContainerClassName: s ? w.FM : void 0,
                imageClassName: s ? w.t3 : void 0,
                src: (0, $.E)(t),
                alt: null == t.description || "" === t.description ? i : t.description,
                responsive: !0,
                limitResponsiveWidth: !s,
                width: t.width,
                height: t.height,
                maxWidth: h,
                maxHeight: c,
                original: t.url,
                shouldLink: l,
                disableAltTextDisplay: null == t.description || "" === t.description,
                hiddenSpoilers: e,
                placeholder: t.placeholder,
                placeholderVersion: t.placeholderVersion,
                srcIsAnimated: t.srcIsAnimated,
                mosaicStyleAlt: !0,
            },
            b = t.url.split(".").pop()?.split("?")[0] ?? "";
        return (
            "jpg" === b && (b = "jpeg"),
            (0, r.jsx)(j.G.Consumer, {
                children: (l) =>
                    (0, r.jsx)(
                        el.Y.Consumer,
                        {
                            children: (t) => {
                                let { disableAnimations: r } = t;
                                return o({
                                    ...v,
                                    autoPlay: u && !r && !e,
                                    renderAccessory: y ? l : null,
                                    handlePreloadImage: x[p],
                                    onClick: g[p],
                                    onMouseEnter: () => this.handleImageHover(),
                                    sourceMetadata: m,
                                    analyticsSource: "Embed",
                                });
                            },
                        },
                        t.url,
                    ),
            })
        );
    }
    renderVideo() {
        let {
                gifv: e = !1,
                isVisible: l = !0,
                hiddenSpoiler: t = !1,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                embed: { url: s, thumbnail: i, video: n, provider: a },
                renderVideoComponent: o,
                renderImageComponent: d,
                renderLinkComponent: u,
                allowFullScreen: h,
                autoPlayGif: c,
                obscureReason: m,
            } = this.props,
            { maxMediaWidth: p, maxMediaHeight: g, sourceMetadata: x } = this.state;
        if (null == s || null == i) return null;
        if (e)
            return null == n
                ? null
                : (0, r.jsx)(el.Y.Consumer, {
                      children: (e) => {
                          let { disableAnimations: a } = e;
                          return (0, r.jsx)(ea, {
                              className: w.W$,
                              href: s,
                              thumbnail: i,
                              video: n,
                              maxWidth: p,
                              maxHeight: g,
                              responsive: !0,
                              autoPlay: !t && c && !a && l,
                              renderImageComponent: d,
                              playable: l,
                              hiddenSpoilers: t,
                              disableAltTextDisplay: null != m,
                              placeholder: n.placeholder,
                              placeholderVersion: n.placeholderVersion,
                              sourceMetadata: x,
                          });
                      },
                  });
        let f = () => {
                this.setState({ videoControlsShown: !0 });
            },
            y = () => {
                this.setState({ videoControlsShown: !1 });
            };
        return (0, r.jsx)(en, {
            className: w.W$,
            href: s,
            allowFullScreen: h,
            thumbnail: i,
            video: n,
            provider: (0, G.QY)(a?.name, n?.url),
            maxWidth: p,
            maxHeight: g,
            responsive: !0,
            renderImageComponent: d,
            renderVideoComponent: o,
            renderLinkComponent: u,
            onControlsShow: f,
            onControlsHide: y,
            playable: l && !t,
            placeholder: n?.placeholder,
            placeholderVersion: n?.placeholderVersion,
            sourceMetadata: x,
        });
    }
    renderFooter() {
        let { autoPlayGif: e } = this.props,
            { footer: l, timestamp: t } = this.props.embed;
        return null != l
            ? (0, r.jsx)(el.Y.Consumer, {
                  children: (s) => {
                      let { disableAnimations: i } = s;
                      return (0, r.jsxs)("div", {
                          className: n()(w.te, w.aK),
                          children: [
                              null != l.iconProxyURL && "" !== l.iconProxyURL
                                  ? (0, r.jsx)("img", {
                                        alt: "",
                                        className: w.mG,
                                        src: e && !i ? l.iconProxyURL : ei(l.iconProxyURL),
                                    })
                                  : null,
                              (0, r.jsxs)("span", {
                                  className: w.oy,
                                  children: [
                                      l.text,
                                      null != l.text && null != t
                                          ? (0, r.jsx)("span", { className: w.i8, children: "\u2022" })
                                          : null,
                                      null != t ? (0, F.mk)(t) : null,
                                  ],
                              }),
                          ],
                      });
                  },
              })
            : null != t
              ? (0, r.jsx)("div", {
                    className: n()(w.te, w.aK),
                    children: (0, r.jsx)("span", { className: w.oy, children: (0, F.mk)(t) }),
                })
              : void 0;
    }
    renderStaticPlaceholderMedia() {
        let { className: e, embed: l } = this.props,
            { maxMediaWidth: t, maxMediaHeight: s } = this.state,
            i = l.image ?? l.video;
        if (null == i) return null;
        let { width: n, height: a } = (0, z.Uj)({ width: i.width, height: i.height, maxWidth: t, maxHeight: s });
        return (0, r.jsx)(o._, {
            className: e,
            readyState: m.Rv1.READY,
            src: "",
            width: n,
            height: a,
            maxWidth: t,
            maxHeight: s,
            mediaLayoutType: et.dG.STATIC,
            useFullWidth: !1,
            zoomable: !1,
        });
    }
    renderMedia() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: l } = this.props,
            { isVisible: t } = this.state;
        if (this.shouldShowStaticPlaceholder) return this.renderStaticPlaceholderMedia();
        switch (l.type) {
            case m.Auw.GIFV:
                return this.renderVideo({ gifv: !0, hiddenSpoiler: e, isVisible: t });
            case m.Auw.VIDEO:
            default:
                if (null != l.video) return this.renderVideo({ gifv: !1, hiddenSpoiler: e, isVisible: t });
                if (null != l.images) return this.renderImages({ hiddenSpoiler: e, isVisible: t });
                return this.renderImage({ hiddenSpoiler: e, isVisible: t, image: l.image, alt: l.rawTitle });
        }
    }
    renderAll() {
        let e,
            { embed: l, hideMedia: t } = this.props,
            { isVisible: r } = this.state,
            s = this.renderProvider(r),
            i = this.renderAuthor(r),
            n = this.renderTitle(r),
            a = er.Mg.has(l.type) ? null : this.renderDescription(),
            o = this.renderFields();
        t || (e = this.renderMedia(!r));
        let d = this.renderFooter(),
            u = null == e;
        return (
            l.type === m.Auw.RICH && (u = null == l.video),
            {
                provider: s,
                author: i,
                title: n,
                description: a,
                thumbnail: !t && u ? this.renderThumbnail(r) : null,
                fields: o,
                media: e,
                footer: d,
            }
        );
    }
    onReveal = () => {
        this.setState({ isVisible: !0 });
    };
    onToggleObscurity = () => {
        this.setState({ isVisible: !this.state.isVisible });
    };
    getMaxWidth(e) {
        let {
                embed: { image: l, images: t, video: r, type: s, thumbnail: i },
            } = this.props,
            { maxMediaWidth: n, maxMediaHeight: a } = this.state,
            o = l ?? r;
        if (null == o) return;
        let { width: d } = (0, z.Uj)({ width: o.width, height: o.height, maxWidth: n, maxHeight: a });
        if (!e && (s === m.Auw.VIDEO || d >= 300)) return d + 32;
        if (s === m.Auw.RICH && void 0 !== t) return 520;
        if (s === m.Auw.GIFV) {
            let { width: e } = (0, z.Uj)({
                width: r?.width ?? i?.width ?? 0,
                height: r?.height ?? i?.height ?? 0,
                maxWidth: n,
                maxHeight: a,
            });
            return e;
        }
    }
    getMinSize() {
        let { video: e } = this.props.embed;
        return null != e ? { minWidth: 150, minHeight: 144 } : void 0;
    }
    isInline() {
        let { hideMedia: e, embed: l } = this.props;
        return !e && (0, G.NV)(l);
    }
    renderSuppressButton(e) {
        return (0, r.jsx)(d.D, {
            focusProps: { offset: { bottom: 4 } },
            className: w.PP,
            onClick: e,
            "aria-label": P.intl.string(P.t.GT3fNz),
            children: (0, r.jsx)(u.P, { size: "xs", color: "currentColor" }),
        });
    }
    renderInlineMediaEmbed = (() => {
        var e = this;
        return function () {
            let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                { obscureReason: t, className: s } = e.props,
                i = e.getMaxWidth(!0);
            return (0, r.jsx)("div", {
                "aria-hidden": l,
                className: n()(w.JY, s, {
                    [w.gT]: t === b.Oc.SPOILER,
                    [w.We]: e.shouldObscure,
                    [w.dK]: l,
                    [w.qU]: e.usesJustifiedAutoStyle(),
                }),
                style: { maxWidth: i },
                children: e.renderMedia(l),
            });
        };
    })();
    usesJustifiedAutoStyle() {
        let { embed: e } = this.props;
        return (
            e.type === m.Auw.IMAGE ||
            e.type === m.Auw.VIDEO ||
            e.type === m.Auw.GIFV ||
            ((e.type === m.Auw.RICH || e.type === m.Auw.ARTICLE) && (null != e.video || null != e.image))
        );
    }
    renderEmbedContent = (() => {
        var e = this;
        return function () {
            let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                { className: t, onSuppressEmbed: s, obscureReason: i } = e.props,
                {
                    provider: a,
                    author: o,
                    title: d,
                    description: u,
                    fields: h,
                    thumbnail: c,
                    media: m,
                    footer: p,
                } = e.renderAll();
            return (0, r.jsx)("article", {
                className: n()(t, w.vO, es.PT, {
                    [w.dK]: l,
                    [w.o4]: i === b.Oc.SPOILER,
                    [w.q$]: e.shouldObscure,
                    [w.qU]: e.usesJustifiedAutoStyle(),
                }),
                "aria-hidden": l,
                style: { borderLeftColor: e.getEmbedColor(l), maxWidth: e.getMaxWidth(!1) },
                children: (0, r.jsx)("div", {
                    className: w.UT,
                    children: (0, r.jsxs)("div", {
                        className: n()({ [w.Vg]: !0, [w.$H]: null != c }),
                        children: [null != s ? e.renderSuppressButton(s) : null, a, o, d, u, h, m, c, p],
                    }),
                }),
            });
        };
    })();
    getEmbedColor(e) {
        let { color: l } = this.props.embed;
        return null == l || 0xffffff === l || e ? void 0 : (0, a.$k)(l, !0);
    }
    getSpoilerStyles(e) {
        let {
                embed: { image: l, images: t, video: r, type: s, rawDescription: i },
            } = this.props,
            { maxMediaWidth: n, maxMediaHeight: a } = this.state;
        if (!this.usesJustifiedAutoStyle()) return { justifySelf: "start", alignSelf: "start" };
        let o = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === o && void 0 === t && s !== m.Auw.RICH) {
            let e = l ?? r;
            if (void 0 !== e) {
                let { minWidth: l, minHeight: t } = this.getMinSize() ?? {},
                    { width: r } = (0, z.Uj)({
                        width: e.width,
                        height: e.height,
                        maxWidth: n,
                        maxHeight: a,
                        minWidth: l,
                        minHeight: t,
                    });
                o = r;
            }
        }
        let d = 150 / (h.Ay.fontScale / 100),
            u = null != i ? (0, J.W)(i) : 0,
            c = (i?.split("\n").length ?? 0) >= 5;
        return { maxWidth: void 0 === o || u >= d || c ? "max-content" : o, justifySelf: "auto" };
    }
    get shouldObscure() {
        let { obscureReason: e } = this.props;
        return null != e && b._K.has(e);
    }
    get shouldShowStaticPlaceholder() {
        let { shouldAgeVerify: e = !1 } = this.props;
        return this.shouldObscure && e;
    }
    render() {
        let { embed: e, obscureReason: l, className: t } = this.props;
        return null != e.provider && Z.includes(e.provider.name)
            ? (0, r.jsx)(ee, { embed: e, className: t })
            : (function (e) {
                    if (null == e.url || e.provider?.name !== "Spotify" || e.type !== m.Auw.LINK) return !1;
                    try {
                        let l = c.parse(e.url, !0).host;
                        return H(l);
                    } catch (e) {
                        return !1;
                    }
                })(e)
              ? (0, r.jsx)(D, { embed: e, className: t })
              : e.provider?.name === "Amazon Music" && e.type === m.Auw.RICH
                ? (0, r.jsx)(N, { embed: e, className: t })
                : (function (e) {
                        if (
                            null == e.url ||
                            e.provider?.name !== "Apple Music" ||
                            (e.type !== m.Auw.ARTICLE && e.type !== m.Auw.LINK)
                        )
                            return !1;
                        try {
                            let l = c.parse(e.url, !0).host;
                            return p(l);
                        } catch (e) {
                            return !1;
                        }
                    })(e)
                  ? (0, r.jsx)(v, { embed: e, className: t })
                  : this.isInline()
                    ? null != l
                        ? (0, r.jsx)(k.Ay, {
                              type: k.Ay.Types.ATTACHMENT,
                              reason: l,
                              onReveal: this.onReveal,
                              onToggleObscurity: this.onToggleObscurity,
                              isSingleMosaicItem: !0,
                              containerStyles: this.getSpoilerStyles(!0),
                              obscurityControlClassName: n()({
                                  [w.yi]: this.state.isVisible && this.state.videoControlsShown,
                              }),
                              children: this.renderInlineMediaEmbed,
                          })
                        : this.renderInlineMediaEmbed()
                    : null != l
                      ? (0, r.jsx)(k.Ay, {
                            type: k.Ay.Types.EMBED,
                            onReveal: this.onReveal,
                            onToggleObscurity: this.onToggleObscurity,
                            reason: l,
                            isSingleMosaicItem: !0,
                            containerStyles: this.getSpoilerStyles(!1),
                            children: this.renderEmbedContent,
                        })
                      : this.renderEmbedContent();
    }
}
