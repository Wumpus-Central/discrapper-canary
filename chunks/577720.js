n.d(t, { Z: () => c });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(981631),
    l = n(537539);
class c extends i.Component {
    render() {
        let { className: e, videoID: t, videoClassName: n } = this.props;
        return (0, r.jsx)("div", {
            className: o()(e, l.videoWrapper),
            children: (0, r.jsx)("iframe", {
                className: o()(n, l.video),
                src: "https://www.youtube.com/embed/"
                    .concat(t, "?rel=0&showinfo=0&controls=1&origin=https://")
                    .concat(s.$R1),
                allowFullScreen: !0,
                sandbox:
                    "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
            }),
        });
    }
}
