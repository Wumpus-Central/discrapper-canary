n(47120), n(177593);
var i,
    l = n(392711),
    o = n.n(l),
    a = n(525654),
    u = n.n(a),
    r = n(579806),
    s = n(292959),
    d = n(246946),
    c = n(626135),
    f = n(358085),
    g = n(557177),
    E = n(998502),
    _ = n(981631);
function N(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
let I = f.isPlatformEmbedded && (0, f.isWindows)(),
    h = I && 10 > parseFloat(r.Z.os.release),
    p = !0;
if (I && !h) {
    let [t, , e] = r.Z.os.release.split('.');
    p = parseInt(t) > 10 || parseInt(e) >= 15063;
}
let T = (I && p) || ('Chrome' === u().name && 47 > parseFloat(u().version)) || ('Firefox' === u().name && 52 > parseFloat(u().version)),
    S = o().throttle(g.GN, 1000, { leading: !0 });
function C() {
    E.ZP.flashFrame(!1);
}
I && (window.addEventListener('focus', C), E.ZP.on('MAIN_WINDOW_FOCUS', C));
let m = window.Notification;
h &&
    (E.ZP.on('NOTIFICATION_CLICK', (t, e) => {
        let n = null[e];
        null != n && (n.onclick(), n.close());
    }),
    E.ZP.send('NOTIFICATIONS_CLEAR'),
    (i = class {
        static requestPermission(t) {
            t();
        }
        close() {
            null != null[this.id] && (delete null[this.id], E.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
        }
        constructor(t, { body: e, icon: n }) {
            N(this, 'id', m._id++),
                N(this, 'title', void 0),
                N(this, 'body', void 0),
                N(this, 'icon', void 0),
                N(this, 'onshow', function () {}),
                N(this, 'onclick', function () {}),
                N(this, 'onclose', function () {}),
                (this.title = t),
                (this.body = e),
                (this.icon = n),
                setImmediate(() => this.onshow()),
                (null[this.id] = this),
                E.ZP.send('NOTIFICATION_SHOW', {
                    id: this.id,
                    title: this.title,
                    body: this.body,
                    icon: this.icon
                });
        }
    }),
    N(i, 'permission', 'granted'),
    N(i, '_id', 0),
    (m = i));
function Z() {
    return null != m && 'granted' === m.permission;
}
function v(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    t.includes('message') ? S(t, e, void 0, n) : (0, g.GN)(t, e);
}
function A(t) {
    return (d.Z.disableNotifications && null == t.overrideStreamerMode) || !Z() || (f.isPlatformEmbedded && !E.ZP.shouldDisplayNotifications());
}
e.Z = {
    hasPermission: Z,
    requestPermission: function (t) {
        null != m &&
            m.requestPermission(() => {
                null != t && t(Z());
            });
    },
    showNotification: function (t, e, n, i, l) {
        var a, u, r, d;
        let g;
        if (A(l)) {
            null != l.sound && !1 !== l.playSoundIfDisabled && v(l.sound, null !== (u = l.volume) && void 0 !== u ? u : 1, l.soundpack);
            return;
        }
        null != l.sound && v(l.sound, null !== (r = l.volume) && void 0 !== r ? r : 1, l.soundpack);
        let N = null !== (d = null == l ? void 0 : l.tag) && void 0 !== d ? d : null;
        (0, f.isLinux)() && (n = o().escape(n));
        let h = {
            icon: t,
            body: n,
            tag: N,
            silent: !0
        };
        I && s.Z.taskbarFlash && E.ZP.flashFrame(!0);
        try {
            g = new m(e, h);
        } catch (t) {
            return null;
        }
        return (null === (a = l.onShown) || void 0 === a || a.call(l),
        !l.omitViewTracking && c.default.track(_.rMx.NOTIFICATION_VIEWED, i),
        (g.onclick = () => {
            var t;
            f.isPlatformEmbedded ? E.ZP.focus() : (window.focus(), g.close()), !l.omitClickTracking && c.default.track(_.rMx.NOTIFICATION_CLICKED, i), null === (t = l.onClick) || void 0 === t || t.call(l);
        }),
        T && setTimeout(() => g.close(), 5000),
        p)
            ? g
            : {
                  close() {
                      var t;
                      null == g || null === (t = g.onclose) || void 0 === t || t.call(g);
                  }
              };
    },
    disabled: A
};
