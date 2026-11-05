(t.d(l, { rr: () => ed, Ay: () => em }), t(321073));
var r = t(477900),
    i = t(582128),
    n = t(503698),
    s = t.n(n),
    a = t(317097),
    o = t(251843),
    u = t(939249),
    d = t(789645),
    h = t(775602),
    c = t(567243),
    m = t(652215);
function p(e) {
    return "music.apple.com" === e;
}
var g = t(855986),
    x = t(462887),
    y = t(413599);
let f = Object.freeze({
    EMBED: (e, l, t) => `https://embed.music.apple.com/${e}?theme=${l}&i=${null != t ? encodeURIComponent(t) : ""}`,
});
var w = t(411517);
function v(e) {
    let {
            className: l,
            embed: { url: t },
        } = e,
        i = (0, g.bG)([y.A], () => (0, x.M)(y.A.theme));
    if (null == t) return null;
    let n = null,
        a = null,
        o = null;
    try {
        let e = c.qg(t, !0);
        ((n = e.host), (a = e.pathname), (o = e.query.i ?? null), Array.isArray(o) && (o = o[0]));
    } catch (e) {
        return null;
    }
    if (!p(n) || null == a) return null;
    let u = /^\/([a-z]{2}(?:-[a-z]{2})?)\//.test(a) ? 2 : 1,
        d = a.split("/"),
        h = d[u]?.toLowerCase();
    null != o && (h = "song");
    let m = 450;
    return (
        "song" === h ? (m = 175) : "music-video" === h && (m = 371),
        (a = a.substr(1)),
        (0, r.jsx)("iframe", {
            className: s()(w.li, l),
            src: f.EMBED(a, i ? "dark" : "light", o),
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
        ((l = (r = c.qg(e, !0)).host), (t = r.pathname));
    } catch (e) {
        return null;
    }
    return null != r && I.test(l ?? "") && null != t ? r : null;
}
function C(e) {
    let {
        className: l,
        embed: { url: t, thumbnail: i },
    } = e;
    if (null == t || null == i) return null;
    let n = S(t);
    if (null == n) return null;
    let a = n.query.iframe_url;
    if (null == a || Array.isArray(a) || null == S(a)) return null;
    let { width: o, height: u } = i,
        d = o,
        h = u;
    return (
        (o > 500 || u > 400) && (o > u ? ((d = 500), (h = (500 * u) / o)) : ((d = (400 * o) / u), (h = 400))),
        (0, r.jsx)("iframe", {
            className: s()(w.FS, l),
            src: a,
            style: { width: d, height: h },
            frameBorder: 0,
            sandbox:
                "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
        })
    );
}
t(508300);
var N = t(607470);
t(516653);
var P = t(792996);
function T(e) {
    let {
            poster: l,
            src: t,
            width: n,
            height: s,
            naturalWidth: a,
            naturalHeight: o,
            play: u = !0,
            className: d,
            alt: h,
            responsive: c,
        } = e,
        m = i.useRef(null);
    return (i.useEffect(() => {
        let { current: e } = m;
        u
            ? e?.play()?.catch((e) => {
                  if (!(e instanceof DOMException) || "NotAllowedError" !== e.name) throw e;
              })
            : e?.pause();
    }, [u]),
    (a <= 6016 && o <= 3384) || (a <= 3384 && o <= 6016))
        ? (0, r.jsx)(N.A, {
              ref: m,
              className: d,
              poster: l,
              src: t,
              width: n,
              height: s,
              responsive: c,
              muted: !0,
              loop: !0,
              autoPlay: u,
              playsInline: !0,
              preload: "none",
              "aria-label": h,
          })
        : (0, r.jsx)("img", { alt: "", src: l, width: n, height: s });
}
function E(e) {
    let {
        src: l,
        poster: t,
        naturalWidth: i,
        naturalHeight: n,
        responsive: s,
        autoPlay: a,
        className: o,
        playable: u = !0,
        renderImageComponent: d,
        alt: h = P.intl.string(P.t.I5gL2H),
        sourceMetadata: c,
        ...m
    } = e;
    return (0, r.jsx)(j.G.Consumer, {
        children: (e) =>
            d({
                ...m,
                alt: h,
                src: t,
                containerClassName: o,
                autoPlay: a,
                animated: u,
                freeze: !0,
                responsive: s,
                renderAccessory: e,
                tabIndex: u ? 0 : -1,
                dataSafeSrc: l,
                children(e) {
                    let { src: t, size: a, animating: d, alt: h } = e;
                    return (0, r.jsx)(T, {
                        alt: h,
                        className: o,
                        poster: t,
                        src: l,
                        width: a.width,
                        height: a.height,
                        naturalWidth: i,
                        naturalHeight: n,
                        responsive: s,
                        play: u && d,
                    });
                },
                sourceMetadata: c,
                analyticsSource: "LazyGIFV",
            }),
    });
}
var L = t(619517),
    M = t(153440),
    W = t(875149),
    R = t(492230),
    _ = t(383055),
    k = t(114212),
    O = t(343552),
    H = t(302031);
function V(e) {
    return null != e && "open.spotify.com" === e;
}
var D = t(628137),
    U = t(272984);
function K(e) {
    let {
        className: l,
        embed: { url: t },
    } = e;
    if (null == t) return null;
    let i = null,
        n = null;
    try {
        let e = c.qg(t.replace(/intl-[^/]+\//, ""), !0);
        ((i = e.host), (n = e.pathname));
    } catch (e) {
        return null;
    }
    if (!V(i) || null == n) return null;
    let a = n.split("/"),
        o = null != a[1] ? a[1].toLowerCase() : null,
        u = s()(w.IL, l);
    if ("user" === o) {
        let e = null != a[3] ? a[3].toLowerCase() : null,
            l = a[4];
        return "playlist" !== e || null == l
            ? null
            : (0, r.jsx)(D.A, { className: u, resourceType: U.M0.PLAYLIST, resourceId: l });
    }
    let d = (0, U.NJ)(o),
        h = a[2];
    return null == d || null == h ? null : (0, r.jsx)(D.A, { className: u, resourceType: d, resourceId: h });
}
var $ = t(734057),
    B = t(644447),
    F = t(129230),
    G = t(188567),
    Y = t(5377),
    z = t(659674),
    q = t(515718),
    J = t(998218),
    Q = t(912051),
    X = t(693942);
function Z(e) {
    let { allowFullScreen: l, ref: t, ...i } = e,
        n = l ? `${X.PE} allow-fullscreen` : X.PE;
    return (0, r.jsx)("iframe", {
        ref: t,
        className: w.Qu,
        allow: l ? "autoplay; fullscreen" : "autoplay",
        frameBorder: 0,
        scrolling: "no",
        sandbox: n,
        allowFullScreen: l,
        ...i,
    });
}
function ee(e) {
    var l;
    let t,
        { provider: n, src: s, autoMute: a, ...o } = e,
        u = i.useRef(null);
    ((l = n === X.mt.TIKTOK),
        (t = i.useCallback(
            (e) => {
                e.data["x-tiktok-player"] &&
                    "https://www.tiktok.com" === e.origin &&
                    "onPlayerReady" === e.data.type &&
                    (a && u.current?.contentWindow?.postMessage({ type: "mute", "x-tiktok-player": !0 }, e.origin),
                    u.current?.contentWindow?.postMessage({ type: "play", "x-tiktok-player": !0 }, e.origin));
            },
            [a, u],
        )),
        i.useEffect(() => {
            if (l) return (window.addEventListener("message", t), () => window.removeEventListener("message", t));
        }, [l, t]));
    let d = (0, X.x7)(s, n, { autoMute: a });
    return (0, r.jsx)(Z, { ref: u, src: d, ...o });
}
var el = t(183129);
let et = ["sessionshare.sp-int.playstation.com", "session-share.playstation.com"],
    er = ["PlayStation"];
function ei(e) {
    let l = e.embed.url,
        t = e.embed.provider?.name;
    if (null == l || null == t) return null;
    let i = null;
    try {
        i = c.qg(l, !0);
    } catch (e) {
        return null;
    }
    let n = (function (e, l) {
        let { host: t, pathname: r } = l,
            i = [];
        if ((null != r && (i = r.split("/")), "PlayStation" === e)) {
            let e;
            if (null == t || !et.includes(t) || 2 !== i.length) return null;
            let l = i[1];
            return {
                embedUrl: ((e = P.intl.currentLocale), `https://${t}/embed/${l}?locale=${e}`),
                style: { width: 400, height: 300, borderRadius: 6 },
            };
        }
        return null;
    })(t, i);
    return null == n
        ? null
        : (0, r.jsx)("iframe", {
              src: n.embedUrl,
              className: s()(el.u, e.className),
              style: n.style,
              sandbox:
                  "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          });
}
var en = t(692051),
    es = t(838541),
    ea = t(768570),
    eo = t(165648);
function eu(e) {
    let l = J.A.toURLSafe(e);
    return null == l ? e : (l.searchParams.set("format", "png"), l.toString());
}
function ed(e) {
    let {
            className: l,
            iframeWrapperClassName: t,
            maxWidth: n,
            maxHeight: a,
            thumbnail: o,
            video: u,
            provider: d,
            allowFullScreen: h = !0,
            responsive: c = !1,
            renderImageComponent: p,
            renderVideoComponent: g,
            renderLinkComponent: x,
            playable: y = !0,
            autoPlay: f = !1,
            autoMute: v,
            volume: b,
            onPlay: j,
            onPause: A,
            onEnded: I,
            onControlsHide: S,
            onControlsShow: C,
            onVolumeChange: N,
            onMute: P,
            disableClickToUnmute: T,
            href: E,
            placeholder: L,
            placeholderVersion: M,
            sourceMetadata: R,
        } = e,
        [_, k] = i.useState(f),
        O = null != u && null == u.proxyURL,
        H = i.useCallback(() => k(!1), [k]);
    function V(e) {
        (e.preventDefault(),
            e.stopPropagation(),
            j?.(!1),
            k(!0),
            O &&
                (G._.dispatch(m.jej.VIDEO_EMBED_PLAYBACK_STARTED),
                G._.subscribeOnce(m.jej.VIDEO_EMBED_PLAYBACK_STARTED, H)));
    }
    i.useEffect(
        () => () => {
            O && G._.unsubscribe(m.jej.VIDEO_EMBED_PLAYBACK_STARTED, H);
        },
        [O, H],
    );
    let { width: D, height: U } = o;
    null != u && ((D = u.width), (U = u.height));
    let K = (0, q.Uj)({ width: D, height: U, maxWidth: n, maxHeight: a });
    ((D = Math.max(K.width, 150)), (U = Math.max(K.height, 144)));
    let $ = (0, B.E)(o);
    if (null != u && null != u.proxyURL)
        return (0, r.jsx)("div", {
            className: s()(w.pu, l),
            children: g({
                poster: $,
                src: u.proxyURL,
                placeholder: L,
                placeholderVersion: M,
                width: D,
                height: U,
                responsive: c,
                autoPlay: f,
                onEnded: I,
                naturalWidth: u.width,
                naturalHeight: u.height,
                onVolumeChange: N,
                playable: y,
                autoMute: v,
                volume: b,
                onPlay: j,
                onPause: A,
                onMute: P,
                onControlsHide: S,
                onControlsShow: C,
                disableClickToUnmute: T,
                sourceMetadata: R,
            }),
        });
    if (_ && null != u) {
        let e,
            i = !0 === v || ("function" == typeof v && v()),
            o = { width: D, height: U },
            m = { width: D, height: U };
        if (c) {
            let l = 0 !== D ? U / D : 1;
            ((o = { maxWidth: n, maxHeight: a, width: void 0, height: void 0 }),
                (m = { paddingBottom: `${100 * l}%`, maxWidth: D }),
                (e = { position: "absolute", top: 0, left: 0, maxWidth: D, maxHeight: U }));
        }
        return (0, r.jsx)("div", {
            className: l,
            style: o,
            children: (0, r.jsx)("div", {
                className: s()(w.pu, t),
                style: m,
                children: (0, r.jsx)(ee, {
                    provider: d,
                    src: u.url,
                    style: e,
                    width: D,
                    height: U,
                    allowFullScreen: h,
                    autoMute: i,
                }),
            }),
        });
    }
    return (0, r.jsxs)("div", {
        className: s()(w.pu, l),
        style: c ? { maxWidth: D } : { width: D, height: U },
        children: [
            p({
                src: $,
                width: D,
                height: U,
                maxWidth: D,
                maxHeight: U,
                responsive: c,
                containerClassName: w.tW,
                imageClassName: w.jq,
                placeholder: L,
                placeholderVersion: M,
                onClick: y && null != u ? V : null,
                sourceMetadata: R,
                analyticsSource: "EmbedVideo",
            }),
            (0, r.jsx)("div", {
                className: w._W,
                children: (0, r.jsx)("div", {
                    className: w.Fo,
                    children: y
                        ? (0, r.jsx)(W.A, {
                              onPlay: null != u ? V : null,
                              externalURL: E,
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
function eh(e) {
    let {
        className: l,
        href: t,
        autoPlay: i,
        maxWidth: n,
        maxHeight: a,
        thumbnail: o,
        video: u,
        renderImageComponent: d,
        responsive: h,
        alt: c,
        disableAltTextDisplay: m = !1,
        playable: p = !0,
        hiddenSpoilers: g,
        placeholder: x,
        placeholderVersion: y,
        sourceMetadata: f,
    } = e;
    return (0, r.jsx)(E, {
        className: s()(w.pu, l),
        original: t,
        poster: (0, B.E)(o),
        src: (0, B.E)(u),
        alt: c,
        width: o.width,
        height: o.height,
        naturalHeight: u.height,
        naturalWidth: u.width,
        maxWidth: n,
        maxHeight: a,
        responsive: h,
        autoPlay: i,
        playable: p,
        renderImageComponent: d,
        hiddenSpoilers: g,
        disableAltTextDisplay: m,
        placeholder: x,
        placeholderVersion: y,
        sourceMetadata: f,
    });
}
function ec(e) {
    let { url: l, image: t, children: n } = e,
        s = i.useMemo(() => (0, O.b)(l, t), [l, t]);
    return (0, r.jsx)(j.G.Provider, { value: s, children: n });
}
class em extends i.PureComponent {
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
        ...(0, z.ds)(this.props.embed),
    };
    renderProvider() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { provider: l },
                renderLinkComponent: t,
                message: i,
            } = this.props;
        return null == l
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, r.jsx)("div", {
                    className: s()(w.zC, w.aK),
                    children: this.renderContentPlaceholder({ width: 80, height: 18 }),
                })
              : (0, r.jsx)("div", {
                    className: s()(w.zC, w.aK),
                    children:
                        null != l.url
                            ? t({
                                  className: w.Cj,
                                  href: l.url,
                                  tabIndex: e ? 0 : -1,
                                  children: l.name,
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  messageId: i?.id,
                                  channelId: i?.channel_id,
                              })
                            : (0, r.jsx)("span", { children: l.name }),
                });
    }
    renderAuthor() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { author: l },
                renderLinkComponent: t,
                message: i,
                autoPlayGif: n,
            } = this.props;
        return null == l
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, r.jsx)("div", {
                    className: s()(w.rN, w.aK),
                    children: this.renderContentPlaceholder({ width: 150, height: 18 }),
                })
              : (0, r.jsx)(en.Y.Consumer, {
                    children: (a) => {
                        let { disableAnimations: o } = a;
                        return (0, r.jsxs)("div", {
                            className: s()(w.rN, w.aK),
                            children: [
                                null != l.iconProxyURL
                                    ? (0, r.jsx)("img", {
                                          alt: "",
                                          className: w.SG,
                                          src: n && !o ? l.iconProxyURL : eu(l.iconProxyURL),
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
                                          messageId: i?.id,
                                          channelId: i?.channel_id,
                                      })
                                    : (0, r.jsx)("span", { className: w.QQ, children: l.name }),
                            ],
                        });
                    },
                });
    }
    renderContentPlaceholder(e) {
        let { width: l, height: t } = e;
        return (0, r.jsx)(k.F, { className: w.Jl, width: l, height: t, opacity: 0.3 });
    }
    renderTitle() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            { embed: l, renderLinkComponent: t, renderTitle: i, message: n } = this.props,
            { rawTitle: a, url: o } = l;
        return null == a
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, r.jsx)("div", {
                    className: s()(w.gt, w.aK),
                    children: this.renderContentPlaceholder({ width: 400, height: 30 }),
                })
              : (0, r.jsx)("div", {
                    className: s()(w.gt, w.aK),
                    children:
                        null != o
                            ? t({
                                  className: w.kv,
                                  href: o,
                                  tabIndex: e ? 0 : -1,
                                  children: i(l, a),
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  messageId: n?.id,
                                  channelId: n?.channel_id,
                              })
                            : i(l, a),
                });
    }
    renderDescription() {
        let { embed: e, renderDescription: l } = this.props,
            { rawDescription: t } = e;
        return null == t
            ? null
            : (0, r.jsx)("div", {
                  className: s()(w.cD, w.aK),
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
                maxThumbnailHeight: i,
                renderImageComponent: n,
                autoPlayGif: s,
            } = this.props,
            { sourceMetadata: a } = this.state;
        return null == l
            ? null
            : (0, r.jsx)(en.Y.Consumer, {
                  children: (r) => {
                      let { disableAnimations: o } = r;
                      return n({
                          containerClassName: w.ad,
                          src: (0, B.E)(l),
                          original: l.url,
                          width: l.width,
                          height: l.height,
                          maxWidth: t,
                          maxHeight: i,
                          shouldLink: e,
                          autoPlay: s && !o,
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
            i = null;
        for (let { rawName: r, rawValue: n, inline: s } of l)
            (s || null == i || (t.push(i), (i = null)),
                null == i && (i = []),
                i.push([this.props.renderTitle(e, r), this.props.renderDescription(e, n, !0)]),
                (3 !== i.length && s) || (t.push(i), (i = null)));
        return (
            null != i && t.push(i),
            (0, r.jsx)("div", {
                className: w.j0,
                children: t.map((e, l) => {
                    let { length: t } = e;
                    return e.map((e, i) => {
                        let n,
                            s,
                            [a, o] = e;
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: w.Me,
                                style: { gridColumn: ((s = i * (n = 12 / t)), `${s + 1} / ${s + n + 1}`) },
                                children: [
                                    (0, r.jsx)("div", { className: w.$L, children: a }),
                                    (0, r.jsx)("div", { className: w.VN, children: o }),
                                ],
                            },
                            `${l}-${i}`,
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
            { maxMediaHeight: i } = this.state;
        if (null == t.images) return null;
        let [n, s, a, o] = t.images.map((r) =>
            this.renderImage({ hiddenSpoiler: e, isVisible: l, image: r, isGalleryImage: !0, allImages: t.images }),
        );
        return null == n && null == s && null == a && null == o
            ? null
            : (0, r.jsxs)("div", {
                  className: w.$B,
                  style: { height: i },
                  children: [
                      (0, r.jsxs)("div", {
                          className: w.Zf,
                          children: [
                              (0, r.jsx)(ec, { url: t.images[0].url, image: t.images[0], children: n }, 0),
                              null != o &&
                                  (0, r.jsx)(ec, { url: t.images[2]?.url, image: t.images[2], children: a }, 2),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: w.Zf,
                          children: [
                              (0, r.jsx)(ec, { url: t.images[1]?.url, image: t.images[1], children: s }, 1),
                              null == o &&
                                  null != a &&
                                  (0, r.jsx)(ec, { url: t.images[2]?.url, image: t.images[2], children: a }, 2),
                              null != o &&
                                  (0, r.jsx)(ec, { url: t.images[3]?.url, image: t.images[3], children: o }, 3),
                          ],
                      }),
                  ],
              });
    }
    handleImageHover() {
        let e = $.A.getChannel(this.props.message?.channel_id);
        F.default.track(m.HAw.IMAGE_HOVERED, {
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
                isGalleryImage: i = !1,
                alt: n = P.intl.string(P.t.X4IxWL),
                allImages: a = null,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: o, className: u, autoPlayGif: d } = this.props,
            { maxMediaWidth: h, maxMediaHeight: c, sourceMetadata: m } = this.state;
        if (null == t) return null;
        let p = (0, B.E)(t),
            {
                srcToOnClickOverride: g,
                srcToHandlePreloadImage: x,
                srcToSeekOverride: y,
            } = null == a
                ? { srcToOnClickOverride: {}, srcToHandlePreloadImage: {}, srcToSeekOverride: {} }
                : (0, R.o)(
                      a.map((e) => ({ ...(0, A.oU)(e, m, "IMAGE"), original: e.url, srcIsAnimated: e.srcIsAnimated })),
                      {},
                      "Embed",
                  ),
            f = L.Ay.isAnimated({ src: (0, B.E)(t), original: t.url, animated: !1, srcIsAnimated: t.srcIsAnimated }),
            v = {
                containerClassName: s()(u, { [w.W$]: !i, [w.Lw]: !i, [w.I_]: i }),
                imageContainerClassName: i ? w.FM : void 0,
                imageClassName: i ? w.t3 : void 0,
                src: (0, B.E)(t),
                alt: null == t.description || "" === t.description ? n : t.description,
                responsive: !0,
                limitResponsiveWidth: !i,
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
                        en.Y.Consumer,
                        {
                            children: (t) => {
                                let { disableAnimations: r } = t;
                                return o({
                                    ...v,
                                    autoPlay: d && !r && !e,
                                    renderAccessory: f ? l : null,
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
                embed: { url: i, thumbnail: n, video: s, provider: a },
                renderVideoComponent: o,
                renderImageComponent: u,
                renderLinkComponent: d,
                allowFullScreen: h,
                autoPlayGif: c,
                obscureReason: m,
            } = this.props,
            { maxMediaWidth: p, maxMediaHeight: g, sourceMetadata: x } = this.state;
        if (null == i || null == n) return null;
        if (e)
            return null == s
                ? null
                : (0, r.jsx)(en.Y.Consumer, {
                      children: (e) => {
                          let { disableAnimations: a } = e;
                          return (0, r.jsx)(eh, {
                              className: w.W$,
                              href: i,
                              thumbnail: n,
                              video: s,
                              maxWidth: p,
                              maxHeight: g,
                              responsive: !0,
                              autoPlay: !t && c && !a && l,
                              renderImageComponent: u,
                              playable: l,
                              hiddenSpoilers: t,
                              disableAltTextDisplay: null != m,
                              placeholder: s.placeholder,
                              placeholderVersion: s.placeholderVersion,
                              sourceMetadata: x,
                          });
                      },
                  });
        let y = () => {
                this.setState({ videoControlsShown: !0 });
            },
            f = () => {
                this.setState({ videoControlsShown: !1 });
            };
        return (0, r.jsx)(ed, {
            className: w.W$,
            href: i,
            allowFullScreen: h,
            thumbnail: n,
            video: s,
            provider: (0, z.QY)(a?.name, s?.url),
            maxWidth: p,
            maxHeight: g,
            responsive: !0,
            renderImageComponent: u,
            renderVideoComponent: o,
            renderLinkComponent: d,
            onControlsShow: y,
            onControlsHide: f,
            playable: l && !t,
            placeholder: s?.placeholder,
            placeholderVersion: s?.placeholderVersion,
            sourceMetadata: x,
        });
    }
    renderFooter() {
        let { autoPlayGif: e } = this.props,
            { footer: l, timestamp: t } = this.props.embed;
        return null != l
            ? (0, r.jsx)(en.Y.Consumer, {
                  children: (i) => {
                      let { disableAnimations: n } = i;
                      return (0, r.jsxs)("div", {
                          className: s()(w.te, w.aK),
                          children: [
                              null != l.iconProxyURL && "" !== l.iconProxyURL
                                  ? (0, r.jsx)("img", {
                                        alt: "",
                                        className: w.mG,
                                        src: e && !n ? l.iconProxyURL : eu(l.iconProxyURL),
                                    })
                                  : null,
                              (0, r.jsxs)("span", {
                                  className: w.oy,
                                  children: [
                                      l.text,
                                      null != l.text && null != t
                                          ? (0, r.jsx)("span", { className: w.i8, children: "\u2022" })
                                          : null,
                                      null != t ? (0, Y.mk)(t) : null,
                                  ],
                              }),
                          ],
                      });
                  },
              })
            : null != t
              ? (0, r.jsx)("div", {
                    className: s()(w.te, w.aK),
                    children: (0, r.jsx)("span", { className: w.oy, children: (0, Y.mk)(t) }),
                })
              : void 0;
    }
    renderStaticPlaceholderMedia() {
        let { className: e, embed: l } = this.props,
            { maxMediaWidth: t, maxMediaHeight: i } = this.state,
            n = l.image ?? l.video;
        if (null == n) return null;
        let { width: s, height: a } = (0, q.Uj)({ width: n.width, height: n.height, maxWidth: t, maxHeight: i });
        return (0, r.jsx)(o._, {
            className: e,
            readyState: m.Rv1.READY,
            src: "",
            width: s,
            height: a,
            maxWidth: t,
            maxHeight: i,
            mediaLayoutType: es.d.STATIC,
            useFullWidth: !1,
            zoomable: !1,
        });
    }
    renderAudio(e) {
        let { audio: l, hiddenSpoiler: t, isVisible: i } = e;
        return (0, r.jsx)(M.Ay, {
            src: l.proxyURL,
            type: M.Ay.Types.AUDIO,
            mimeType: null != l.contentType ? [l.contentType] : void 0,
            autoPlay: !1,
            playable: i && !t,
            renderLinkComponent: _.bU,
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
            case m.Auw.AUDIO:
                if (null != l.audio) return this.renderAudio({ audio: l.audio, hiddenSpoiler: e, isVisible: t });
                return this.renderImage({ hiddenSpoiler: e, isVisible: t, image: l.image, alt: l.rawTitle });
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
            i = this.renderProvider(r),
            n = this.renderAuthor(r),
            s = this.renderTitle(r),
            a = ea.Mg.has(l.type) ? null : this.renderDescription(),
            o = this.renderFields();
        t || (e = this.renderMedia(!r));
        let u = this.renderFooter(),
            d = null == e;
        return (
            (l.type === m.Auw.RICH || l.type === m.Auw.AUDIO) && (d = null == l.video),
            {
                provider: i,
                author: n,
                title: s,
                description: a,
                thumbnail: !t && d ? this.renderThumbnail(r) : null,
                fields: o,
                media: e,
                footer: u,
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
                embed: { image: l, images: t, video: r, type: i, thumbnail: n },
            } = this.props,
            { maxMediaWidth: s, maxMediaHeight: a } = this.state,
            o = l ?? r;
        if (null == o) return;
        let { width: u } = (0, q.Uj)({ width: o.width, height: o.height, maxWidth: s, maxHeight: a });
        if (!e && (i === m.Auw.VIDEO || u >= 300)) return u + 32;
        if (i === m.Auw.RICH && void 0 !== t) return 520;
        if (i === m.Auw.GIFV) {
            let { width: e } = (0, q.Uj)({
                width: r?.width ?? n?.width ?? 0,
                height: r?.height ?? n?.height ?? 0,
                maxWidth: s,
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
        return !e && (0, z.NV)(l);
    }
    renderSuppressButton(e) {
        return (0, r.jsx)(u.D, {
            focusProps: { offset: { bottom: 4 } },
            className: w.PP,
            onClick: e,
            "aria-label": P.intl.string(P.t.GT3fNz),
            children: (0, r.jsx)(d.XSmallIcon, { size: "xs", color: "currentColor" }),
        });
    }
    renderInlineMediaEmbed = (() => {
        var e = this;
        return function () {
            let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                { obscureReason: t, className: i } = e.props,
                n = e.getMaxWidth(!0);
            return (0, r.jsx)("div", {
                "aria-hidden": l,
                className: s()(w.JY, i, {
                    [w.gT]: t === b.Oc.SPOILER,
                    [w.We]: e.shouldObscure,
                    [w.dK]: l,
                    [w.qU]: e.usesJustifiedAutoStyle(),
                }),
                style: { maxWidth: n },
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
                { className: t, onSuppressEmbed: i, obscureReason: n } = e.props,
                {
                    provider: a,
                    author: o,
                    title: u,
                    description: d,
                    fields: h,
                    thumbnail: c,
                    media: m,
                    footer: p,
                } = e.renderAll();
            return (0, r.jsx)("article", {
                className: s()(t, w.vO, eo.PT, {
                    [w.dK]: l,
                    [w.o4]: n === b.Oc.SPOILER,
                    [w.q$]: e.shouldObscure,
                    [w.qU]: e.usesJustifiedAutoStyle(),
                }),
                "aria-hidden": l,
                style: { borderLeftColor: e.getEmbedColor(l), maxWidth: e.getMaxWidth(!1) },
                children: (0, r.jsx)("div", {
                    className: w.UT,
                    children: (0, r.jsxs)("div", {
                        className: s()({ [w.Vg]: !0, [w.$H]: null != c }),
                        children: [null != i ? e.renderSuppressButton(i) : null, a, o, u, d, h, m, c, p],
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
                embed: { image: l, images: t, video: r, type: i, rawDescription: n },
            } = this.props,
            { maxMediaWidth: s, maxMediaHeight: a } = this.state;
        if (!this.usesJustifiedAutoStyle()) return { justifySelf: "start", alignSelf: "start" };
        let o = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === o && void 0 === t && i !== m.Auw.RICH) {
            let e = l ?? r;
            if (void 0 !== e) {
                let { minWidth: l, minHeight: t } = this.getMinSize() ?? {},
                    { width: r } = (0, q.Uj)({
                        width: e.width,
                        height: e.height,
                        maxWidth: s,
                        maxHeight: a,
                        minWidth: l,
                        minHeight: t,
                    });
                o = r;
            }
        }
        let u = 150 / (h.Ay.fontScale / 100),
            d = null != n ? (0, Q.W)(n) : 0,
            c = (n?.split("\n").length ?? 0) >= 5;
        return { maxWidth: void 0 === o || d >= u || c ? "max-content" : o, justifySelf: "auto" };
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
        return null != e.provider && er.includes(e.provider.name)
            ? (0, r.jsx)(ei, { embed: e, className: t })
            : (function (e) {
                    if (null == e.url || e.provider?.name !== "Spotify" || e.type !== m.Auw.LINK) return !1;
                    try {
                        let l = c.qg(e.url, !0).host;
                        return V(l);
                    } catch (e) {
                        return !1;
                    }
                })(e)
              ? (0, r.jsx)(K, { embed: e, className: t })
              : e.provider?.name === "Amazon Music" && e.type === m.Auw.RICH
                ? (0, r.jsx)(C, { embed: e, className: t })
                : (function (e) {
                        if (
                            null == e.url ||
                            e.provider?.name !== "Apple Music" ||
                            (e.type !== m.Auw.ARTICLE && e.type !== m.Auw.LINK)
                        )
                            return !1;
                        try {
                            let l = c.qg(e.url, !0).host;
                            return p(l);
                        } catch (e) {
                            return !1;
                        }
                    })(e)
                  ? (0, r.jsx)(v, { embed: e, className: t })
                  : this.isInline()
                    ? null != l
                        ? (0, r.jsx)(H.Ay, {
                              type: H.Ay.Types.ATTACHMENT,
                              reason: l,
                              onReveal: this.onReveal,
                              onToggleObscurity: this.onToggleObscurity,
                              isSingleMosaicItem: !0,
                              containerStyles: this.getSpoilerStyles(!0),
                              obscurityControlClassName: s()({
                                  [w.yi]: this.state.isVisible && this.state.videoControlsShown,
                              }),
                              children: this.renderInlineMediaEmbed,
                          })
                        : this.renderInlineMediaEmbed()
                    : null != l
                      ? (0, r.jsx)(H.Ay, {
                            type: H.Ay.Types.EMBED,
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
