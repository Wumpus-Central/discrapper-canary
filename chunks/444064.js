d.d(t, { t: () => i });
var i = class {
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
