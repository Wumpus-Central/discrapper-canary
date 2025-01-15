n(47120), n(177593);
var r,
    a = n(392711),
    l = n.n(a),
    i = n(525654),
    o = n.n(i),
    s = n(579806),
    c = n(292959),
    d = n(246946),
    u = n(626135),
    m = n(358085),
    h = n(557177),
    x = n(998502),
    f = n(981631);
function p(e, t, n) {
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
let b = m.isPlatformEmbedded && (0, m.isWindows)(),
    g = b && 10 > parseFloat(s.Z.os.release),
    v = !0;
if (b && !g) {
    let [e, , t] = s.Z.os.release.split('.');
    v = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let j = (b && v) || ('Chrome' === o().name && 47 > parseFloat(o().version)) || ('Firefox' === o().name && 52 > parseFloat(o().version)),
    C = l().throttle(h.GN, 1000, { leading: !0 });
function T() {
    x.ZP.flashFrame(!1);
}
b && (window.addEventListener('focus', T), x.ZP.on('MAIN_WINDOW_FOCUS', T));
let _ = window.Notification;
g &&
    (x.ZP.on('NOTIFICATION_CLICK', (e, t) => {
        let n = null[t];
        null != n && (n.onclick(), n.close());
    }),
    x.ZP.send('NOTIFICATIONS_CLEAR'),
    (r = class {
        static requestPermission(e) {
            e();
        }
        close() {
            null != null[this.id] && (delete null[this.id], x.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
        }
        constructor(e, { body: t, icon: n }) {
            p(this, 'id', _._id++),
                p(this, 'title', void 0),
                p(this, 'body', void 0),
                p(this, 'icon', void 0),
                p(this, 'onshow', function () {}),
                p(this, 'onclick', function () {}),
                p(this, 'onclose', function () {}),
                (this.title = e),
                (this.body = t),
                (this.icon = n),
                setImmediate(() => this.onshow()),
                (null[this.id] = this),
                x.ZP.send('NOTIFICATION_SHOW', {
                    id: this.id,
                    title: this.title,
                    body: this.body,
                    icon: this.icon
                });
        }
    }),
    p(r, 'permission', 'granted'),
    p(r, '_id', 0),
    (_ = r));
function S() {
    return null != _ && 'granted' === _.permission;
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? C(e, t, void 0, n) : (0, h.GN)(e, t);
}
function y(e) {
    return (d.Z.disableNotifications && null == e.overrideStreamerMode) || !S() || (m.isPlatformEmbedded && !x.ZP.shouldDisplayNotifications());
}
t.Z = {
    hasPermission: S,
    requestPermission: function (e) {
        null != _ &&
            _.requestPermission(() => {
                null != e && e(S());
            });
    },
    showNotification: function (e, t, n, r, a) {
        var i, o, s, d;
        let h;
        if (y(a)) {
            null != a.sound && !1 !== a.playSoundIfDisabled && N(a.sound, null !== (o = a.volume) && void 0 !== o ? o : 1, a.soundpack);
            return;
        }
        null != a.sound && N(a.sound, null !== (s = a.volume) && void 0 !== s ? s : 1, a.soundpack);
        let p = null !== (d = null == a ? void 0 : a.tag) && void 0 !== d ? d : null;
        (0, m.isLinux)() && (n = l().escape(n));
        let g = {
            icon: e,
            body: n,
            tag: p,
            silent: !0
        };
        b && c.Z.taskbarFlash && x.ZP.flashFrame(!0);
        try {
            h = new _(t, g);
        } catch (e) {
            return null;
        }
        return (null === (i = a.onShown) || void 0 === i || i.call(a),
        !a.omitViewTracking && u.default.track(f.rMx.NOTIFICATION_VIEWED, r),
        (h.onclick = () => {
            var e;
            m.isPlatformEmbedded ? x.ZP.focus() : (window.focus(), h.close()), !a.omitClickTracking && u.default.track(f.rMx.NOTIFICATION_CLICKED, r), null === (e = a.onClick) || void 0 === e || e.call(a);
        }),
        j && setTimeout(() => h.close(), 5000),
        v)
            ? h
            : {
                  close() {
                      var e;
                      null == h || null === (e = h.onclose) || void 0 === e || e.call(h);
                  }
              };
    },
    disabled: y
};
