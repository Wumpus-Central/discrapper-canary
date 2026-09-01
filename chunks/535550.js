var n,
    a =
        (this && this.__createBinding) ||
        (Object.create
            ? function (e, t, r, n) {
                  void 0 === n && (n = r);
                  var a = Object.getOwnPropertyDescriptor(t, r);
                  (!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) &&
                      (a = {
                          enumerable: !0,
                          get: function () {
                              return t[r];
                          },
                      }),
                      Object.defineProperty(e, n, a);
              }
            : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r]);
              }),
    i =
        (this && this.__setModuleDefault) ||
        (Object.create
            ? function (e, t) {
                  Object.defineProperty(e, "default", { enumerable: !0, value: t });
              }
            : function (e, t) {
                  e.default = t;
              }),
    s =
        (this && this.__importStar) ||
        ((n = function (e) {
            return (n =
                Object.getOwnPropertyNames ||
                function (e) {
                    var t = [];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                    return t;
                })(e);
        }),
        function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var r = n(e), s = 0; s < r.length; s++) "default" !== r[s] && a(t, e, r[s]);
            return i(t, e), t;
        });
Object.defineProperty(t, "__esModule", { value: !0 });
let o = s(r(767130)),
    u = r(767130),
    l = r(628403);
t.default = class {
    refine(e, t) {
        return (
            e.option.forwardDate &&
                t.forEach((t) => {
                    let r = e.reference.getDateWithAdjustedTimezone();
                    if (t.start.isOnlyTime() && e.reference.instant > t.start.date()) {
                        let r = e.reference.getDateWithAdjustedTimezone(),
                            n = new Date(r);
                        n.setDate(n.getDate() + 1),
                            o.implySimilarDate(t.start, n),
                            e.debug(() => {
                                console.log(
                                    `${this.constructor.name} adjusted ${t} time from the ref date (${r}) to the following day (${n})`,
                                );
                            }),
                            t.end &&
                                t.end.isOnlyTime() &&
                                (o.implySimilarDate(t.end, n),
                                t.start.date() > t.end.date() &&
                                    (n.setDate(n.getDate() + 1), o.implySimilarDate(t.end, n)));
                    }
                    if (t.start.isOnlyWeekdayComponent() && r > t.start.date()) {
                        let n = t.start.get("weekday") - r.getDay();
                        if (
                            (n <= 0 && (n += 7),
                            (r = (0, l.addDuration)(r, { day: n })),
                            (0, u.implySimilarDate)(t.start, r),
                            e.debug(() => {
                                console.log(`${this.constructor.name} adjusted ${t} weekday (${t.start})`);
                            }),
                            t.end && t.end.isOnlyWeekdayComponent())
                        ) {
                            let n = t.end.get("weekday") - r.getDay();
                            n <= 0 && (n += 7),
                                (r = (0, l.addDuration)(r, { day: n })),
                                (0, u.implySimilarDate)(t.end, r),
                                e.debug(() => {
                                    console.log(`${this.constructor.name} adjusted ${t} weekday (${t.end})`);
                                });
                        }
                    }
                    if (t.start.isDateWithUnknownYear() && r > t.start.date())
                        for (let n = 0; n < 3 && r > t.start.date(); n++)
                            t.start.imply("year", t.start.get("year") + 1),
                                e.debug(() => {
                                    console.log(`${this.constructor.name} adjusted ${t} year (${t.start})`);
                                }),
                                t.end &&
                                    !t.end.isCertain("year") &&
                                    (t.end.imply("year", t.end.get("year") + 1),
                                    e.debug(() => {
                                        console.log(`${this.constructor.name} adjusted ${t} month (${t.start})`);
                                    }));
                }),
            t
        );
    }
};
