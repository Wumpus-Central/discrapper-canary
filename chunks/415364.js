var r = n(562255).off;
e.exports = function () {
    var e = this,
        t = e.element;
    r(t, 'keypress', e.eventHandler), r(t, 'keydown', e.eventHandler), r(t, 'keyup', e.eventHandler);
};
