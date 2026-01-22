n.d(t, { O: () => i });
var r = n(64700);
function i(e) {
    return "string" == typeof e || "number" == typeof e
        ? e
        : e instanceof Array
          ? e.map(i).join("")
          : r.isValidElement(e)
            ? i(e.props.children)
            : void 0;
}
