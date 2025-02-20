n.d(t, {
    O: () => i,
    Z: () => r
});
var r = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'],
    i = (function () {
        function e(e, t) {
            if (0 === t) throw Error("Can't create weekday with n == 0");
            (this.weekday = e), (this.n = t);
        }
        return (
            (e.fromStr = function (t) {
                return new e(r.indexOf(t));
            }),
            (e.prototype.nth = function (t) {
                return this.n === t ? this : new e(this.weekday, t);
            }),
            (e.prototype.equals = function (e) {
                return this.weekday === e.weekday && this.n === e.n;
            }),
            (e.prototype.toString = function () {
                var e = r[this.weekday];
                return this.n && (e = (this.n > 0 ? '+' : '') + String(this.n) + e), e;
            }),
            (e.prototype.getJsWeekday = function () {
                return 6 === this.weekday ? 0 : this.weekday + 1;
            }),
            e
        );
    })();
