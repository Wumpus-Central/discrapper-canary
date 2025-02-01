var i = n(829132);
function r(e) {
    (this.data = e), (this.left = null), (this.right = null), (this.red = !0);
}
function a(e) {
    (this._root = null), (this._comparator = e), (this.size = 0);
}
function s(e) {
    return null !== e && e.red;
}
function o(e, t) {
    var n = e.get_child(!t);
    return e.set_child(!t, n.get_child(t)), n.set_child(t, e), (e.red = !0), (n.red = !1), n;
}
function l(e, t) {
    return e.set_child(!t, o(e.get_child(!t), !t)), o(e, t);
}
(r.prototype.get_child = function (e) {
    return e ? this.right : this.left;
}),
    (r.prototype.set_child = function (e, t) {
        e ? (this.right = t) : (this.left = t);
    }),
    (a.prototype = new i()),
    (a.prototype.insert = function (e) {
        var t = !1;
        if (null === this._root) (this._root = new r(e)), (t = !0), this.size++;
        else {
            var n = new r(void 0),
                i = 0,
                a = 0,
                u = null,
                c = n,
                d = null,
                f = this._root;
            for (c.right = this._root; ; ) {
                if ((null === f ? ((f = new r(e)), d.set_child(i, f), (t = !0), this.size++) : s(f.left) && s(f.right) && ((f.red = !0), (f.left.red = !1), (f.right.red = !1)), s(f) && s(d))) {
                    var _ = c.right === u;
                    f === d.get_child(a) ? c.set_child(_, o(u, !a)) : c.set_child(_, l(u, !a));
                }
                var p = this._comparator(f.data, e);
                if (0 === p) break;
                (a = i), (i = p < 0), null !== u && (c = u), (u = d), (d = f), (f = f.get_child(i));
            }
            this._root = n.right;
        }
        return (this._root.red = !1), t;
    }),
    (a.prototype.remove = function (e) {
        if (null === this._root) return !1;
        var t = new r(void 0),
            n = t;
        n.right = this._root;
        for (var i = null, a = null, u = null, c = 1; null !== n.get_child(c); ) {
            var d = c;
            (a = i), (i = n), (n = n.get_child(c));
            var f = this._comparator(e, n.data);
            if (((c = f > 0), 0 === f && (u = n), !s(n) && !s(n.get_child(c)))) {
                if (s(n.get_child(!c))) {
                    var _ = o(n, c);
                    i.set_child(d, _), (i = _);
                } else if (!s(n.get_child(!c))) {
                    var p = i.get_child(!d);
                    if (null !== p) {
                        if (s(p.get_child(!d)) || s(p.get_child(d))) {
                            var h = a.right === i;
                            s(p.get_child(d)) ? a.set_child(h, l(i, d)) : s(p.get_child(!d)) && a.set_child(h, o(i, d));
                            var m = a.get_child(h);
                            (m.red = !0), (n.red = !0), (m.left.red = !1), (m.right.red = !1);
                        } else (i.red = !1), (p.red = !0), (n.red = !0);
                    }
                }
            }
        }
        return null !== u && ((u.data = n.data), i.set_child(i.right === n, n.get_child(null === n.left)), this.size--), (this._root = t.right), null !== this._root && (this._root.red = !1), null !== u;
    }),
    (e.exports = a);
