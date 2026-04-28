a.d(e, { A: () => l });
var i = a(527758),
    n = a(47312),
    s = a(64700);
function h(t) {
    var e = (t && t.ownerDocument) || document,
        a = e.defaultView || e.parentWindow || window;
    return { document: e, window: a };
}
function o(t) {
    return t || document.head;
}
var r = "hcaptcha-api-script-id",
    c = "hcaptchaOnLoad",
    p = [],
    d = function (t) {
        void 0 === t && (t = {});
        var e = o(t.scriptLocation);
        delete t.scriptLocation;
        var a = h(e),
            i = p.find(function (t) {
                return t.scope === a.window;
            });
        if (a.document.getElementById(r) && i) return i.promise;
        var n = new Promise(function (i, n) {
            a.window[c] = i;
            var s = t.apihost || "https://js.hcaptcha.com";
            delete t.apihost;
            var h = a.document.createElement("script");
            (h.id = r),
                (h.src = s + "/1/api.js?render=explicit&onload=" + c),
                (h.async = void 0 === t.loadAsync || t.loadAsync),
                delete t.loadAsync,
                (h.onerror = function (t) {
                    return n("script-error");
                });
            var o = Object.entries(t)
                .filter(function (t) {
                    t[0];
                    var e = t[1];
                    return e || !1 === e;
                })
                .map(function (t) {
                    var e = t[0],
                        a = t[1];
                    return encodeURIComponent(e) + "=" + encodeURIComponent(a);
                })
                .join("&");
            (h.src += "" !== o ? "&" + o : ""), e.appendChild(h);
        });
        return p.push({ promise: n, scope: a.window }), n;
    };
let l = (function (t) {
    function e(e) {
        var a;
        return (
            ((a = t.call(this, e) || this)._hcaptcha = void 0),
            (a.renderCaptcha = a.renderCaptcha.bind((0, i.A)(a))),
            (a.resetCaptcha = a.resetCaptcha.bind((0, i.A)(a))),
            (a.removeCaptcha = a.removeCaptcha.bind((0, i.A)(a))),
            (a.isReady = a.isReady.bind((0, i.A)(a))),
            (a.loadCaptcha = a.loadCaptcha.bind((0, i.A)(a))),
            (a.handleOnLoad = a.handleOnLoad.bind((0, i.A)(a))),
            (a.handleSubmit = a.handleSubmit.bind((0, i.A)(a))),
            (a.handleExpire = a.handleExpire.bind((0, i.A)(a))),
            (a.handleError = a.handleError.bind((0, i.A)(a))),
            (a.handleOpen = a.handleOpen.bind((0, i.A)(a))),
            (a.handleClose = a.handleClose.bind((0, i.A)(a))),
            (a.handleChallengeExpired = a.handleChallengeExpired.bind((0, i.A)(a))),
            (a.ref = s.createRef()),
            (a.apiScriptRequested = !1),
            (a.state = { isApiReady: !1, isRemoved: !1, elementId: e.id, captchaId: "" }),
            a
        );
    }
    (0, n.A)(e, t);
    var a = e.prototype;
    return (
        (a.componentDidMount = function () {
            var t = this,
                e = h(o(this.props.scriptLocation));
            ((this._hcaptcha = e.window.hcaptcha || void 0), void 0 !== this._hcaptcha)
                ? this.setState({ isApiReady: !0 }, function () {
                      t.renderCaptcha();
                  })
                : this.loadCaptcha();
        }),
        (a.componentWillUnmount = function () {
            var t = this.state.captchaId,
                e = this._hcaptcha;
            this.isReady() && (e.reset(t), e.remove(t));
        }),
        (a.shouldComponentUpdate = function (t, e) {
            return this.state.isApiReady === e.isApiReady && this.state.isRemoved === e.isRemoved;
        }),
        (a.componentDidUpdate = function (t) {
            var e = this;
            ["sitekey", "size", "theme", "tabindex", "languageOverride", "endpoint"].every(function (a) {
                return t[a] === e.props[a];
            }) ||
                this.removeCaptcha(function () {
                    e.renderCaptcha();
                });
        }),
        (a.loadCaptcha = function () {
            if (!this.apiScriptRequested) {
                var t = this.props,
                    e = t.apihost,
                    a = t.assethost,
                    i = t.endpoint,
                    n = t.host,
                    s = t.imghost;
                d({
                    apihost: e,
                    assethost: a,
                    endpoint: i,
                    hl: t.languageOverride,
                    host: n,
                    imghost: s,
                    recaptchacompat: !1 === t.reCaptchaCompat ? "off" : null,
                    reportapi: t.reportapi,
                    sentry: t.sentry,
                    custom: t.custom,
                    loadAsync: t.loadAsync,
                    scriptLocation: t.scriptLocation,
                })
                    .then(this.handleOnLoad)
                    .catch(this.handleError),
                    (this.apiScriptRequested = !0);
            }
        }),
        (a.renderCaptcha = function (t) {
            if (this.state.isApiReady) {
                var e = Object.assign(
                        {
                            "open-callback": this.handleOpen,
                            "close-callback": this.handleClose,
                            "error-callback": this.handleError,
                            "chalexpired-callback": this.handleChallengeExpired,
                            "expired-callback": this.handleExpire,
                            callback: this.handleSubmit,
                        },
                        this.props,
                        { hl: this.props.hl || this.props.languageOverride, languageOverride: void 0 },
                    ),
                    a = this._hcaptcha.render(this.ref.current, e);
                this.setState({ isRemoved: !1, captchaId: a }, function () {
                    t && t();
                });
            }
        }),
        (a.resetCaptcha = function () {
            var t = this.state.captchaId,
                e = this._hcaptcha;
            this.isReady() && e.reset(t);
        }),
        (a.removeCaptcha = function (t) {
            var e = this.state.captchaId,
                a = this._hcaptcha;
            this.isReady() &&
                this.setState({ isRemoved: !0 }, function () {
                    a.remove(e), t && t();
                });
        }),
        (a.handleOnLoad = function () {
            var t = this;
            this.setState({ isApiReady: !0 }, function () {
                var e = h(o(t.props.scriptLocation));
                (t._hcaptcha = e.window.hcaptcha),
                    t.renderCaptcha(function () {
                        var e = t.props.onLoad;
                        e && e();
                    });
            });
        }),
        (a.handleSubmit = function (t) {
            var e = this.props.onVerify,
                a = this.state,
                i = a.isRemoved,
                n = a.captchaId,
                s = this._hcaptcha;
            if (void 0 !== s && !i) {
                var h = s.getResponse(n),
                    o = s.getRespKey(n);
                e && e(h, o);
            }
        }),
        (a.handleExpire = function () {
            var t = this.props.onExpire,
                e = this.state.captchaId,
                a = this._hcaptcha;
            this.isReady() && (a.reset(e), t && t());
        }),
        (a.handleError = function (t) {
            var e = this.props.onError,
                a = this.state.captchaId,
                i = this._hcaptcha;
            this.isReady() && i.reset(a), e && e(t);
        }),
        (a.isReady = function () {
            var t = this.state,
                e = t.isApiReady,
                a = t.isRemoved;
            return e && !a;
        }),
        (a.handleOpen = function () {
            this.isReady() && this.props.onOpen && this.props.onOpen();
        }),
        (a.handleClose = function () {
            this.isReady() && this.props.onClose && this.props.onClose();
        }),
        (a.handleChallengeExpired = function () {
            this.isReady() && this.props.onChalExpired && this.props.onChalExpired();
        }),
        (a.execute = function (t) {
            void 0 === t && (t = null);
            var e = this.state.captchaId,
                a = this._hcaptcha;
            if (this.isReady()) return t && "object" != typeof t && (t = null), a.execute(e, t);
        }),
        (a.setData = function (t) {
            var e = this.state.captchaId,
                a = this._hcaptcha;
            this.isReady() && (t && "object" != typeof t && (t = null), a.setData(e, t));
        }),
        (a.getResponse = function () {
            return this._hcaptcha.getResponse(this.state.captchaId);
        }),
        (a.getRespKey = function () {
            return this._hcaptcha.getRespKey(this.state.captchaId);
        }),
        (a.render = function () {
            var t = this.state.elementId;
            return s.createElement("div", { ref: this.ref, id: t });
        }),
        e
    );
})(s.Component);
