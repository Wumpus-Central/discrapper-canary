var r = 'undefined' != typeof Symbol && Symbol,
    i = n(882171);
e.exports = function () {
    return 'function' == typeof r && 'function' == typeof Symbol && 'symbol' == typeof r('foo') && 'symbol' == typeof Symbol('bar') && i();
};
