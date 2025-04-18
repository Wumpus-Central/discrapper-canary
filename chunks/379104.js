var r = n(829132);
function i(e) {
    (this.data = e), (this.left = null), (this.right = null), (this.red = !0);
}
function a(e) {
    (this._root = null), (this._comparator = e), (this.size = 0);
}
function o(e) {
    return null !== e && e.red;
}
function s(e, t) {
    var n = e.get_child(!t);
    return e.set_child(!t, n.get_child(t)), n.set_child(t, e), (e.red = !0), (n.red = !1), n;
}
function l(e, t) {
    return e.set_child(!t, s(e.get_child(!t), !t)), s(e, t);
}
(i.prototype.get_child = function (e) {
    return e ? this.right : this.left;
}),
    (i.prototype.set_child = function (e, t) {
        e ? (this.right = t) : (this.left = t);
    }),
    (a.prototype = new r()),
    (a.prototype.insert = function (e) {
        var t = !1;
        if (null === this._root) (this._root = new i(e)), (t = !0), this.size++;
        else {
            var n = new i(void 0),
                r = 0,
                a = 0,
                c = null,
                u = n,
                d = null,
                f = this._root;
            for (u.right = this._root; ; ) {
                if ((null === f ? ((f = new i(e)), d.set_child(r, f), (t = !0), this.size++) : o(f.left) && o(f.right) && ((f.red = !0), (f.left.red = !1), (f.right.red = !1)), o(f) && o(d))) {
                    var _ = u.right === c;
                    f === d.get_child(a) ? u.set_child(_, s(c, !a)) : u.set_child(_, l(c, !a));
                }
                var p = this._comparator(f.data, e);
                if (0 === p) break;
                (a = r), (r = p < 0), null !== c && (u = c), (c = d), (d = f), (f = f.get_child(r));
            }
            this._root = n.right;
        }
        return (this._root.red = !1), t;
    }),
    (a.prototype.remove = function (e) {
        if (null === this._root) return !1;
        var t = new i(void 0),
            n = t;
        n.right = this._root;
        for (var r = null, a = null, c = null, u = 1; null !== n.get_child(u); ) {
            var d = u;
            (a = r), (r = n), (n = n.get_child(u));
            var f = this._comparator(e, n.data);
            if (((u = f > 0), 0 === f && (c = n), !o(n) && !o(n.get_child(u)))) {
                if (o(n.get_child(!u))) {
                    var _ = s(n, u);
                    r.set_child(d, _), (r = _);
                } else if (!o(n.get_child(!u))) {
                    var p = r.get_child(!d);
                    if (null !== p)
                        if (o(p.get_child(!d)) || o(p.get_child(d))) {
                            var h = a.right === r;
                            o(p.get_child(d)) ? a.set_child(h, l(r, d)) : o(p.get_child(!d)) && a.set_child(h, s(r, d));
                            var m = a.get_child(h);
                            (m.red = !0), (n.red = !0), (m.left.red = !1), (m.right.red = !1);
                        } else (r.red = !1), (p.red = !0), (n.red = !0);
                }
            }
        }
        return null !== c && ((c.data = n.data), r.set_child(r.right === n, n.get_child(null === n.left)), this.size--), (this._root = t.right), null !== this._root && (this._root.red = !1), null !== c;
    }),
    (e.exports = a);
