e.exports = function (e) {
    return (
        !!e &&
        !!e.ownerDocument &&
        (e.ownerDocument.defaultView ? e instanceof e.ownerDocument.defaultView.HTMLElement : e instanceof HTMLElement)
    );
};
