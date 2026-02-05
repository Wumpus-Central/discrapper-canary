"use strict";
n.d(t, { A: () => p });
var r = n(1139),
    i = n(299146),
    a = n(47312);
n(655972);
var s = n(427778),
    o = n(946651),
    l = n(64700),
    u = n(660856),
    c = n(80292),
    d = function (e, t) {
        return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
                return (0, s.A)(e, t);
            })
        );
    },
    _ = function (e, t) {
        return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
                return (0, o.A)(e, t);
            })
        );
    },
    f = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return (
                ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = { appear: {}, enter: {}, exit: {} }),
                (t.onEnter = function (e, n) {
                    var r = t.resolveArguments(e, n),
                        i = r[0],
                        a = r[1];
                    t.removeClasses(i, "exit"),
                        t.addClass(i, a ? "appear" : "enter", "base"),
                        t.props.onEnter && t.props.onEnter(e, n);
                }),
                (t.onEntering = function (e, n) {
                    var r = t.resolveArguments(e, n),
                        i = r[0],
                        a = r[1] ? "appear" : "enter";
                    t.addClass(i, a, "active"), t.props.onEntering && t.props.onEntering(e, n);
                }),
                (t.onEntered = function (e, n) {
                    var r = t.resolveArguments(e, n),
                        i = r[0],
                        a = r[1] ? "appear" : "enter";
                    t.removeClasses(i, a), t.addClass(i, a, "done"), t.props.onEntered && t.props.onEntered(e, n);
                }),
                (t.onExit = function (e) {
                    var n = t.resolveArguments(e)[0];
                    t.removeClasses(n, "appear"),
                        t.removeClasses(n, "enter"),
                        t.addClass(n, "exit", "base"),
                        t.props.onExit && t.props.onExit(e);
                }),
                (t.onExiting = function (e) {
                    var n = t.resolveArguments(e)[0];
                    t.addClass(n, "exit", "active"), t.props.onExiting && t.props.onExiting(e);
                }),
                (t.onExited = function (e) {
                    var n = t.resolveArguments(e)[0];
                    t.removeClasses(n, "exit"), t.addClass(n, "exit", "done"), t.props.onExited && t.props.onExited(e);
                }),
                (t.resolveArguments = function (e, n) {
                    return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
                }),
                (t.getClassNames = function (e) {
                    var n = t.props.classNames,
                        r = "string" == typeof n,
                        i = r && n ? n + "-" : "",
                        a = r ? "" + i + e : n[e],
                        s = r ? a + "-active" : n[e + "Active"],
                        o = r ? a + "-done" : n[e + "Done"];
                    return { baseClassName: a, activeClassName: s, doneClassName: o };
                }),
                t
            );
        }
        (0, a.A)(t, e);
        var n = t.prototype;
        return (
            (n.addClass = function (e, t, n) {
                var r = this.getClassNames(t)[n + "ClassName"],
                    i = this.getClassNames("enter").doneClassName;
                "appear" === t && "done" === n && i && (r += " " + i),
                    "active" === n && e && (0, c.F)(e),
                    r && ((this.appliedClasses[t][n] = r), d(e, r));
            }),
            (n.removeClasses = function (e, t) {
                var n = this.appliedClasses[t],
                    r = n.base,
                    i = n.active,
                    a = n.done;
                (this.appliedClasses[t] = {}), r && _(e, r), i && _(e, i), a && _(e, a);
            }),
            (n.render = function () {
                var e = this.props,
                    t = (e.classNames, (0, i.A)(e, ["classNames"]));
                return l.createElement(
                    u.Ay,
                    (0, r.A)({}, t, {
                        onEnter: this.onEnter,
                        onEntered: this.onEntered,
                        onEntering: this.onEntering,
                        onExit: this.onExit,
                        onExiting: this.onExiting,
                        onExited: this.onExited,
                    }),
                );
            }),
            t
        );
    })(l.Component);
(f.defaultProps = { classNames: "" }), (f.propTypes = {});
let p = f;
