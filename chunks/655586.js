function i(l) {
    "u" > typeof localStorage && localStorage.setItem("ds", l ? "1" : "0");
}
d.d(t, { n: () => i, t: () => e });
var e = class {
    isVisible() {
        return !document.hidden;
    }
    onVisibilityChange(l) {
        let t = () => {
            l(!document.hidden);
        };
        return (
            document.addEventListener("visibilitychange", t),
            () => {
                document.removeEventListener("visibilitychange", t);
            }
        );
    }
};
