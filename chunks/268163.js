var r = n(220159),
    o = n(253462),
    a = n(296004).CONSTRUCTOR,
    i = n(57100),
    s = n(178476),
    c = n(971428),
    l = n(342930),
    u = i && i.prototype;
if (
    (r(
        {
            target: 'Promise',
            proto: !0,
            forced: a,
            real: !0
        },
        {
            catch: function (e) {
                return this.then(void 0, e);
            }
        }
    ),
    !o && c(i))
) {
    var d = s('Promise').prototype.catch;
    u.catch !== d && l(u, 'catch', d, { unsafe: !0 });
}
