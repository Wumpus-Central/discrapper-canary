var i = r(829132);
function a(e) {
    (this.data = e), (this.left = null), (this.right = null), (this.red = !0);
}
function o(e) {
    (this._root = null), (this._comparator = e), (this.size = 0);
}
function s(e) {
    return null !== e && e.red;
}
function l(e, n) {
    var r = e.get_child(!n);
    return e.set_child(!n, r.get_child(n)), r.set_child(n, e), (e.red = !0), (r.red = !1), r;
}
function u(e, n) {
    return e.set_child(!n, l(e.get_child(!n), !n)), l(e, n);
}
(a.prototype.get_child = function (e) {
    return e ? this.right : this.left;
}),
    (a.prototype.set_child = function (e, n) {
        e ? (this.right = n) : (this.left = n);
    }),
    (o.prototype = new i()),
    (o.prototype.insert = function (e) {
        var n = !1;
        if (null === this._root) (this._root = new a(e)), (n = !0), this.size++;
        else {
            var r = new a(void 0),
                i = 0,
                o = 0,
                c = null,
                d = r,
                f = null,
                p = this._root;
            for (d.right = this._root; ; ) {
                if ((null === p ? ((p = new a(e)), f.set_child(i, p), (n = !0), this.size++) : s(p.left) && s(p.right) && ((p.red = !0), (p.left.red = !1), (p.right.red = !1)), s(p) && s(f))) {
                    var h = d.right === c;
                    p === f.get_child(o) ? d.set_child(h, l(c, !o)) : d.set_child(h, u(c, !o));
                }
                var _ = this._comparator(p.data, e);
                if (0 === _) break;
                (o = i), (i = _ < 0), null !== c && (d = c), (c = f), (f = p), (p = p.get_child(i));
            }
            this._root = r.right;
        }
        return (this._root.red = !1), n;
    }),
    (o.prototype.remove = function (e) {
        if (null === this._root) return !1;
        var n = new a(void 0),
            r = n;
        r.right = this._root;
        for (var i = null, o = null, c = null, d = 1; null !== r.get_child(d); ) {
            var f = d;
            (o = i), (i = r), (r = r.get_child(d));
            var p = this._comparator(e, r.data);
            if (((d = p > 0), 0 === p && (c = r), !s(r) && !s(r.get_child(d)))) {
                if (s(r.get_child(!d))) {
                    var h = l(r, d);
                    i.set_child(f, h), (i = h);
                } else if (!s(r.get_child(!d))) {
                    var _ = i.get_child(!f);
                    if (null !== _) {
                        if (s(_.get_child(!f)) || s(_.get_child(f))) {
                            var m = o.right === i;
                            s(_.get_child(f)) ? o.set_child(m, u(i, f)) : s(_.get_child(!f)) && o.set_child(m, l(i, f));
                            var g = o.get_child(m);
                            (g.red = !0), (r.red = !0), (g.left.red = !1), (g.right.red = !1);
                        } else (i.red = !1), (_.red = !0), (r.red = !0);
                    }
                }
            }
        }
        return null !== c && ((c.data = r.data), i.set_child(i.right === r, r.get_child(null === r.left)), this.size--), (this._root = n.right), null !== this._root && (this._root.red = !1), null !== c;
    }),
    (e.exports = o);
