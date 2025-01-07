t(47120), t(177593);
var o,
    i = t(392711),
    a = t.n(i),
    r = t(525654),
    c = t.n(r),
    l = t(579806),
    s = t(292959),
    d = t(246946),
    u = t(626135),
    f = t(358085),
    b = t(557177),
    g = t(998502),
    h = t(981631);
function _(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
let m = f.isPlatformEmbedded && (0, f.isWindows)(),
    p = m && 10 > parseFloat(l.Z.os.release),
    C = !0;
if (m && !p) {
    let [e, , n] = l.Z.os.release.split('.');
    C = parseInt(e) > 10 || parseInt(n) >= 15063;
}
let I = (m && C) || ('Chrome' === c().name && 47 > parseFloat(c().version)) || ('Firefox' === c().name && 52 > parseFloat(c().version)),
    T = a().throttle(b.GN, 1000, { leading: !0 });
function B() {
    g.ZP.flashFrame(!1);
}
m && (window.addEventListener('focus', B), g.ZP.on('MAIN_WINDOW_FOCUS', B));
let v = window.Notification;
p &&
    (g.ZP.on('NOTIFICATION_CLICK', (e, n) => {
        let t = null[n];
        null != t && (t.onclick(), t.close());
    }),
    g.ZP.send('NOTIFICATIONS_CLEAR'),
    (o = class {
        static requestPermission(e) {
            e();
        }
        close() {
            null != null[this.id] && (delete null[this.id], g.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
        }
        constructor(e, { body: n, icon: t }) {
            _(this, 'id', v._id++),
                _(this, 'title', void 0),
                _(this, 'body', void 0),
                _(this, 'icon', void 0),
                _(this, 'onshow', function () {}),
                _(this, 'onclick', function () {}),
                _(this, 'onclose', function () {}),
                (this.title = e),
                (this.body = n),
                (this.icon = t),
                setImmediate(() => this.onshow()),
                (null[this.id] = this),
                g.ZP.send('NOTIFICATION_SHOW', {
                    id: this.id,
                    title: this.title,
                    body: this.body,
                    icon: this.icon
                });
        }
    }),
    _(o, 'permission', 'granted'),
    _(o, '_id', 0),
    (v = o));
function k() {
    return null != v && 'granted' === v.permission;
}
function w(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        t = arguments.length > 2 ? arguments[2] : void 0;
    e.includes('message') ? T(e, n, void 0, t) : (0, b.GN)(e, n);
}
function R(e) {
    return (d.Z.disableNotifications && null == e.overrideStreamerMode) || !k() || (f.isPlatformEmbedded && !g.ZP.shouldDisplayNotifications());
}
n.Z = {
    hasPermission: k,
    requestPermission: function (e) {
        null != v &&
            v.requestPermission(() => {
                null != e && e(k());
            });
    },
    showNotification: function (e, n, t, o, i) {
        var r, c, l, d;
        let b;
        if (R(i)) {
            null != i.sound && !1 !== i.playSoundIfDisabled && w(i.sound, null !== (c = i.volume) && void 0 !== c ? c : 1, i.soundpack);
            return;
        }
        null != i.sound && w(i.sound, null !== (l = i.volume) && void 0 !== l ? l : 1, i.soundpack);
        let _ = null !== (d = null == i ? void 0 : i.tag) && void 0 !== d ? d : null;
        (0, f.isLinux)() && (t = a().escape(t));
        let p = {
            icon: e,
            body: t,
            tag: _,
            silent: !0
        };
        m && s.Z.taskbarFlash && g.ZP.flashFrame(!0);
        try {
            b = new v(n, p);
        } catch (e) {
            return null;
        }
        return (null === (r = i.onShown) || void 0 === r || r.call(i),
        !i.omitViewTracking && u.default.track(h.rMx.NOTIFICATION_VIEWED, o),
        (b.onclick = () => {
            var e;
            f.isPlatformEmbedded ? g.ZP.focus() : (window.focus(), b.close()), !i.omitClickTracking && u.default.track(h.rMx.NOTIFICATION_CLICKED, o), null === (e = i.onClick) || void 0 === e || e.call(i);
        }),
        I && setTimeout(() => b.close(), 5000),
        C)
            ? b
            : {
                  close() {
                      var e;
                      null == b || null === (e = b.onclose) || void 0 === e || e.call(b);
                  }
              };
    },
    disabled: R
};
