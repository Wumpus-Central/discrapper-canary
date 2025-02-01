var i = n(977791),
    r = SyntaxError,
    a = 'object' == typeof StopIteration ? StopIteration : null;
e.exports = function (e) {
    if (!a) throw new r('this environment lacks StopIteration');
    i.set(e, '[[Done]]', !1);
    var t = {
        next: function () {
            var e = i.get(this, '[[Iterator]]'),
                t = i.get(e, '[[Done]]');
            try {
                return {
                    done: t,
                    value: t ? void 0 : e.next()
                };
            } catch (t) {
                if ((i.set(e, '[[Done]]', !0), t !== a)) throw t;
                return {
                    done: !0,
                    value: void 0
                };
            }
        }
    };
    return i.set(t, '[[Iterator]]', e), t;
};
